import { ref, onMounted, computed, type Ref, type ComputedRef } from 'vue'
import { LANDING_DATA, type DownloadTarget } from '@/features/landing/data'

export type MacosBuild = {
  url: string
  file: string
  note: string
}

const UPDATES_MANIFEST_URL = 'https://memorise-updates.vercel.app/latest.json'

// Stable alias that always serves the newest DMG, so downloads keep working
// even when the manifest fetch fails.
export const MACOS_FALLBACK: MacosBuild = {
  url: 'https://memorise-updates.vercel.app/Memorise_latest_aarch64.dmg',
  file: 'Memorise_latest_aarch64.dmg',
  note: 'macOS 12+',
}

export function useLatestMacos(): Ref<MacosBuild> {
  const macos = ref<MacosBuild>(MACOS_FALLBACK)

  onMounted(async () => {
    try {
      const res = await fetch(UPDATES_MANIFEST_URL)
      if (!res.ok) throw new Error(`status ${res.status}`)
      const data = (await res.json()) as { macos?: MacosBuild }
      macos.value = data.macos ?? MACOS_FALLBACK
    } catch (e) {
      macos.value = MACOS_FALLBACK
      console.error('Failed to load latest release manifest', e)
    }
  })

  return macos
}

export function useReleaseDownloads(): ComputedRef<DownloadTarget[]> {
  const macos = useLatestMacos()

  return computed(() =>
    LANDING_DATA.release.downloads.map(d =>
      d.os === 'macOS' ? { ...d, ...macos.value } : d
    )
  )
}
