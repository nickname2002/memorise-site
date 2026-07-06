import { ref, onMounted } from 'vue'

const UPDATES_MANIFEST_URL = 'https://memorise-updates.vercel.app/latest.json'

// Stable alias that always serves the newest DMG, so downloads keep working
// even when the manifest fetch fails.
export const MACOS_FALLBACK = {
  url: 'https://memorise-updates.vercel.app/Memorise_latest_aarch64.dmg',
  file: 'Memorise_latest_aarch64.dmg',
  note: 'macOS 12+',
}

export function useLatestMacos() {
  const macos = ref(MACOS_FALLBACK)

  onMounted(async () => {
    try {
      const res = await fetch(UPDATES_MANIFEST_URL)
      if (!res.ok) throw new Error(`status ${res.status}`)
      const data = await res.json()
      macos.value = data.macos ?? MACOS_FALLBACK
    } catch (e) {
      macos.value = MACOS_FALLBACK
      console.error('Failed to load latest release manifest', e)
    }
  })

  return macos
}
