import { ref, onMounted } from 'vue'

const UPDATES_MANIFEST_URL = 'https://memorise-updates.vercel.app/latest.json'

export function useLatestMacos() {
  const macos = ref(null)

  onMounted(async () => {
    try {
      const res = await fetch(UPDATES_MANIFEST_URL)
      if (!res.ok) throw new Error(`status ${res.status}`)
      const data = await res.json()
      macos.value = data.macos ?? null
    } catch (e) {
      macos.value = null
      console.error('Failed to load latest release manifest', e)
    }
  })

  return macos
}
