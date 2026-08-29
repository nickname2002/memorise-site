// Shared password for testers, gating every real download button on the
// site (landing page, macos-install page). Set via VITE_TEST_PHASE_PASSWORD
// (see .env.example) so it isn't checked into git. It still ends up
// readable in the built JS bundle — it's a casual deterrent for this first
// test phase, not real access control. Don't hash it or add lockout logic;
// that would be over-engineering something that's fundamentally
// client-side.
export const TEST_PHASE_PASSWORD = import.meta.env.VITE_TEST_PHASE_PASSWORD ?? ''

export type TestInstruction = {
  title: string
  body: string
}

export type KnownIssue = {
  title: string
  body: string
  severity?: 'minor' | 'major'
}

export const TEST_PHASE_DATA = {
  intro: 'Placeholder: a short paragraph explaining what this test phase is for and what feedback we want.',

  instructions: [
    { title: 'Placeholder step 1', body: 'Placeholder: describe what to do first.' },
    { title: 'Placeholder step 2', body: 'Placeholder: describe what to do next.' },
    { title: 'Placeholder step 3', body: 'Placeholder: describe how to report feedback and bugs.' },
  ] as TestInstruction[],

  knownIssues: [
    { title: 'Placeholder issue 1', body: 'Placeholder: describe a known issue.', severity: 'minor' },
    { title: 'Placeholder issue 2', body: 'Placeholder: describe another known issue.', severity: 'major' },
  ] as KnownIssue[],
}
