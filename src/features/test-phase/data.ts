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

export type PrivacyPoint = {
  title: string
  body: string
}

export const TEST_PHASE_DATA = {
  intro: "Welcome to the first user test of Memorise. We're looking for real-world feedback: how the app fits into your daily note-taking, what's missing, and what breaks. Feature requests, bug reports, and general impressions are all welcome — we're also collecting error data via Sentry based on your usage.",

  instructions: [
    { title: 'Download and install the build', body: 'Get the latest build from the link below and set it up on your device.' },
    { title: 'Use Memorise as your daily notes app', body: 'Create, edit, and organize notes the way you normally would. Try syncing across devices if you use more than one.' },
    { title: 'Report bugs and feedback', body: 'Use the "Report feedback" button in the bottom-left corner of the app to flag issues as they happen or share feature requests and general feedback.' },
  ] as TestInstruction[],

  knownIssues: [
    { title: 'App may rarely show a blank screen on startup', body: 'In rare cases, the app can show a blank window on launch. If this happens, try restarting your computer or reconnecting to the internet. A permanent fix is currently in development.' },
    { title: 'Auto-update is not yet working', body: "In-app updates currently fail. Until this is fixed, you'll need to manually download and reinstall new builds. We'll notify testers when new versions are available." },
  ] as KnownIssue[],

  privacyIntro: 'Your notes, your control. Memorise gives you two ways to store your notes:',

  privacyPoints: [
    { title: 'Local vault', body: 'Notes stay entirely on your device. We only ever see a hash of local vault content — never the actual notes.' },
    { title: 'Cloud vault', body: 'Notes sync across your devices and are end-to-end encrypted by default, meaning only you can read them. This can be turned off if needed, but stays on by default.' },
  ] as PrivacyPoint[],
}
