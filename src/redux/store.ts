import {configureStore} from "@reduxjs/toolkit";
import rouletteReducer from "./slices/rouletteSlice";
import controlReducer from "./slices/controlSlice";

export const store = configureStore({
    reducer: {
        roulette: rouletteReducer,
        control: controlReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch