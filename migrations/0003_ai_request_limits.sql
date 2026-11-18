CREATE TABLE IF NOT EXISTS ai_request_limits (
 subject TEXT NOT NULL,
 window_start INTEGER NOT NULL,
 request_count INTEGER NOT NULL,
 PRIMARY KEY (subject, window_start)
);
CREATE INDEX IF NOT EXISTS ai_request_limits_expiry ON ai_request_limits(window_start);
