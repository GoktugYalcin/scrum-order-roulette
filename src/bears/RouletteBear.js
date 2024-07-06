import {create} from "zustand";

export const useRouletteStore = create((set) => ({
    isSpinning: false,
    setIsSpinning: (status) => set({isSpinning: status}),
    prizeNumber: null,
    setPrizeNumber: (prize) => set({prizeNumber: prize})
}))