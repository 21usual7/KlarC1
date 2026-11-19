CREATE TABLE IF NOT EXISTS password_resets (
 user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
 token_hash TEXT NOT NULL UNIQUE,
 expires_at INTEGER NOT NULL,
 next_send_at INTEGER NOT NULL
);

CREATE TRIGGER IF NOT EXISTS revoke_credentials_after_password_change
AFTER UPDATE OF password_hash ON users
BEGIN
 DELETE FROM sessions WHERE user_id = NEW.id;
 DELETE FROM password_resets WHERE user_id = NEW.id;
END;

CREATE TABLE IF NOT EXISTS scoreboard (
 user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
 lessons INTEGER NOT NULL DEFAULT 0,
 tests INTEGER NOT NULL DEFAULT 0,
 points INTEGER GENERATED ALWAYS AS (lessons * 10 + tests * 30) STORED
);

CREATE INDEX IF NOT EXISTS scoreboard_points ON scoreboard(points DESC, user_id);

CREATE VIEW IF NOT EXISTS learning_scores AS
SELECT learning_state.user_id,
 COALESCE(SUM(json_array_length(module.value, '$.lessons')), 0) AS lessons,
 COALESCE(SUM(CASE WHEN json_type(module.value, '$.test.passed') = 'true' THEN 1 ELSE 0 END), 0) AS tests
FROM learning_state
LEFT JOIN json_each(learning_state.payload, '$.progress.modules') AS module
WHERE json_valid(learning_state.payload)
GROUP BY learning_state.user_id;

CREATE TRIGGER IF NOT EXISTS scoreboard_after_learning_insert
AFTER INSERT ON learning_state
WHEN EXISTS (SELECT 1 FROM scoreboard WHERE user_id = NEW.user_id)
BEGIN
 UPDATE scoreboard SET (lessons, tests) = (
  SELECT lessons, tests FROM learning_scores WHERE user_id = NEW.user_id
 ) WHERE user_id = NEW.user_id;
END;

CREATE TRIGGER IF NOT EXISTS scoreboard_after_learning_update
AFTER UPDATE OF payload ON learning_state
WHEN EXISTS (SELECT 1 FROM scoreboard WHERE user_id = NEW.user_id)
BEGIN
 UPDATE scoreboard SET (lessons, tests) = (
  SELECT lessons, tests FROM learning_scores WHERE user_id = NEW.user_id
 ) WHERE user_id = NEW.user_id;
END;
