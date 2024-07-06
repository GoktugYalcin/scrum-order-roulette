import { create } from 'zustand'
import {devtools} from "zustand/middleware";

export const useHistoryStore = create(devtools((set) => ({
    history: [],
    setHistory: (newHistory) => set({history: newHistory}),
    pushHistory: (item) => set(state => ({history: state.history.push(item)})),
    rouletteList: [],
    setRouletteList: (list) => set({rouletteList: list}),
    modalOpened: false,
    setModalOpened: (open) => set({modalOpened: open}),
}), {name: "Roulette/HistoryBear"}))