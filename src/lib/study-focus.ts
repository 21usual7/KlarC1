export const studyTracks = ['Математика + кибербезопасность', 'Математика · криптография', 'Информатика · кибербезопасность'] as const;
export const defaultStudyTrack = studyTracks[0];
export const studyStages = [
  { value: 'both', label: 'Бакалавриат и магистратура — сравниваю' },
  { value: 'bachelor', label: 'Бакалавриат' },
  { value: 'master', label: 'Магистратура' },
] as const;
export type StudyStage = typeof studyStages[number]['value'];
export function normalizeStudyStage(value: unknown): StudyStage { return value === 'bachelor' || value === 'master' ? value : 'both'; }
export function getStudyFocus(track: unknown) {
  if (track === studyTracks[1] || track === 'Mathematik & Physik') return {
    context: 'higher mathematics and cryptography: analysis, linear algebra, discrete mathematics, probability, number theory, proofs, modular arithmetic and cryptographic assumptions',
    intermediate: ['Einen Beweis erklären', 'Mit Resten rechnen', 'In der Sprechstunde'],
    advanced: ['Eine mathematische Vorlesung zusammenfassen', 'Eine kryptographische Annahme erklären', 'Prüfungssimulation'],
  };
  if (track === studyTracks[2] || track === 'Informatik') return {
    context: 'computer science and cybersecurity: algorithms, complexity, networks, authentication, cryptography, threat models and defensive security',
    intermediate: ['Einen Algorithmus erklären', 'Authentifizierung verstehen', 'In der Sprechstunde'],
    advanced: ['Ein Bedrohungsmodell präsentieren', 'Eine Sicherheitsanalyse zusammenfassen', 'Prüfungssimulation'],
  };
  return {
    context: 'higher mathematics, cryptography and cybersecurity: analysis, linear algebra, discrete mathematics, number theory, proof reasoning, algorithms, cryptographic assumptions, authentication and threat models',
    intermediate: ['Einen Beweis erklären', 'Einen Algorithmus erklären', 'Eine verschlüsselte Nachricht verstehen'],
    advanced: ['Eine kryptographische Annahme erklären', 'Ein Bedrohungsmodell präsentieren', 'Prüfungssimulation'],
  };
}
export function tutorStudyContext(track: unknown, stage: unknown): string {
  const degree = normalizeStudyStage(stage);
  return `The learner is interested in ${getStudyFocus(track).context}. Degree goal: ${degree === 'both' ? 'comparing bachelor and master routes; do not assume one' : degree}. This is language practice, not a full mathematics or security qualification. At A1-A2 keep daily student scenarios and simple study interests; introduce technical vocabulary gradually from B1, never require prior mathematical knowledge to complete a beginner task. At B1-C1 practice explaining definitions, assumptions and reasoning, summarizing lectures and discussing technical choices. Distinguish bachelor entrance procedures from master admission and recognize that some master programs are English-taught: never claim German C1 is universally required.`;
}
