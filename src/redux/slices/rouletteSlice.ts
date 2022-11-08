import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export interface RouletteData {
    option: string,
    optionLabel?: string
}

export const rouletteSlice = createSlice({
    name: 'roulette',
    initialState: {
        // @ts-ignore
        value: JSON.parse(localStorage.getItem('scrum-wheel')) || [],
        historyValue: [],
        prizeNumber: 0
    },
    reducers: {
        createRoulette: (state, action) => {
            const values = action.payload?.split("\n")
                .filter((i: string) => i.trim() !== "")
                .map((i: string) => ({ option: i }));
            state.value = values
            localStorage.setItem("scrum-wheel", JSON.stringify(values));
        },
        rewindRoulette: (state) => {
            // @ts-ignore
            state.value = JSON.parse(localStorage.getItem("scrum-wheel"))
            state.historyValue = []
        },
        setPrizeNumber: (state, action:PayloadAction<number>) => {
            state.prizeNumber = action.payload
        },
        setRouletteOutCandidate: (state, action:PayloadAction<number>) => {
            state.value = state.value.filter((item: any, index: number) => index !== action.payload)
        },
        setHistoryValue: (state, action: PayloadAction<any>) => {
            if(!action.payload) {
                state.historyValue = []
            }
            else {
                state.historyValue = action.payload
            }
        },
    },
})

// @ts-ignore
export const getRouletteData = (state: RootState) => state.roulette.value

// @ts-ignore
export const getRouletteHistory = (state: RootState) => state.roulette.historyValue

export const {
    createRoulette,
    rewindRoulette,
    setHistoryValue,
    setPrizeNumber,
    setRouletteOutCandidate
} = rouletteSlice.actions

export default rouletteSlice.reducer