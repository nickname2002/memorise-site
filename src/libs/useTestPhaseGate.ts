import { ref } from 'vue'
import { TEST_PHASE_PASSWORD } from '@/features/test-phase/data'

const STORAGE_KEY = 'memorise-test-phase-unlocked'

const unlocked = ref(localStorage.getItem(STORAGE_KEY) === '1')

export function useTestPhaseGate() {
  function unlock(password: string): boolean {
    if (password.trim() !== TEST_PHASE_PASSWORD) return false
    unlocked.value = true
    localStorage.setItem(STORAGE_KEY, '1')
    return true
  }

  return { unlocked, unlock }
}
