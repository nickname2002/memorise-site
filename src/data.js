export const LANDING_DATA = {
  tagline: "A second brain you actually own.",
  channel: "beta",

  features: [
    {
      icon: "i-shield",
      title: "Local-first, always yours",
      desc: "Every note lives in a plain-text vault on your own machine. No account, no cloud, no lock-in — just files you control.",
    },
    {
      icon: "i-folder",
      title: "Folders and tags",
      desc: "Organise the way you think. Drop notes into folders, then cross-cut them with tags. Filter the list to exactly what matters.",
    },
    {
      icon: "i-pencil",
      title: "A quiet editor",
      desc: "Headings, lists, tables, attachments — and nothing you don't need. The blank page is the point; the chrome gets out of the way.",
    },
    {
      icon: "i-keyboard",
      title: "Keyboard-driven",
      desc: "⌘K opens search, ⌘, opens settings, and the panels collapse on a keypress. Your hands never have to leave the keys.",
      kbd: ["⌘K", "⌘,"],
    },
  ],

  previewCards: [
    { k: "Three columns", t: "Folders, notes, and the editor — collapse whatever you're not using." },
    { k: "⌘K to anywhere", t: "Full-text search jumps you to any note in a couple of keystrokes." },
    { k: "Works offline", t: "On a plane, in a tunnel, or ten years from now. The vault is just yours." },
  ],

  release: {
    version: "0.8.0",
    channel: "beta",
    date: "June 5, 2026",
    downloads: [
      { os: "macOS", icon: "apple", note: "Universal · 12+", file: "Memorise_0.1.0_aarch64.dmg", size: "dmg", url: "https://github.com/nickname2002/memorise-site/releases/download/1.0b.1/Memorise_0.1.0_aarch64.dmg" },
      { os: "Windows", icon: "windows", note: "x64 · Win 10+", file: "Memorise_0.1.0_x64.msi", size: "msi" },
      { os: "Linux", icon: "linux", note: "AppImage · x86_64", file: "Memorise_0.1.0_x86_64.AppImage", size: "AppImage" },
    ],
    notes: [
      { tag: "new", text: "Filter the notes list by tag straight from the sidebar." },
      { tag: "new", text: "Paste Markdown and it converts to rich text in the editor." },
      { tag: "imp", text: "Vault indexing is roughly 3× faster on large vaults." },
      { tag: "fix", text: "Editor keeps focus when you switch notes mid-edit." },
    ],
    sha: "sha256 · 9f2a…c714",
  },

  changelog: [
    {
      version: "0.8.0", channel: "beta", date: "Jun 5, 2026",
      title: "Tag filtering and faster vaults",
      items: [
        { tag: "new", text: "Filter the notes list by tag from the sidebar." },
        { tag: "new", text: "Paste Markdown — it converts to rich text inline." },
        { tag: "imp", text: "Vault indexing is ~3× faster on large vaults." },
        { tag: "fix", text: "Editor keeps focus when switching notes." },
      ],
    },
    {
      version: "0.7.2", channel: "beta", date: "May 22, 2026",
      title: "Stability pass",
      items: [
        { tag: "fix", text: "Fixed a crash when opening an empty vault." },
        { tag: "fix", text: "Table cell navigation with Tab now wraps correctly." },
        { tag: "imp", text: "Search ranking favours title matches over body." },
      ],
    },
    {
      version: "0.7.0", channel: "beta", date: "May 6, 2026",
      title: "Appearance settings",
      items: [
        { tag: "new", text: "Settings → Appearance: pick the system UI font." },
        { tag: "new", text: "Dark mode, matched to the night-sky palette." },
        { tag: "imp", text: "Smoother sidebar collapse animation." },
      ],
    },
    {
      version: "0.6.1", channel: "beta", date: "Apr 18, 2026",
      title: "Attachments",
      items: [
        { tag: "new", text: "Attach files to a note with the paperclip button." },
        { tag: "fix", text: "Windows builds are now properly signed." },
      ],
    },
  ],

  codes: ["MEM-2026-BETA-7X4K"],
};
