import {createSlice} from "@reduxjs/toolkit";

export const controlSlice = createSlice({
    name: 'control',
    initialState: {
        mustSpin: false,
        modalOpened: false
    },
    reducers: {
        switchMustSpin: (state) => {
            state.mustSpin = !state.mustSpin
        },
        switchModalOpened: (state) => {
            state.modalOpened = !state.modalOpened
        }
    }
})

export const {
    switchMustSpin,
    switchModalOpened
} = controlSlice.actions

export default controlSlice.reducer