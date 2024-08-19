import { create } from 'zustand'
import { combine, devtools } from 'zustand/middleware'

interface State {
  bears: number
}

export const useCounterStore = create(
  devtools(
    combine(
      {
        bears: 0,
      } as State,
      (set, get) => ({
        increment: () => set({ bears: get().bears + 1 }),
      }),
    ),
  ),
)
