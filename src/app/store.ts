import { configureStore } from "@reduxjs/toolkit"
import displayTextReducer from "../features/displayText/displayTextSlice"
import turnOnOffReducer from "../features/turnOnOff/turnOnOffSlice"
import controlVolumeReducer from "../features/controlVolume/controlVolumeSlice"

export const store = configureStore({
  reducer: {
    displayText: displayTextReducer,
    turnOnOff: turnOnOffReducer,
    controlVolume: controlVolumeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
