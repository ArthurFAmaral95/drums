import { configureStore } from "@reduxjs/toolkit"
import displayTextReducer from "../features/displayText/displayTextSlice"
import turnOnOffReducer from "../features/turnOnOff/turnOnOffSlice"
import controlVolumeReducer from "../features/controlVolume/controlVolumeSlice"
import playWithKeysReducer from "../features/playWithKeys/playWithKeysSlice"

export const store = configureStore({
  reducer: {
    displayText: displayTextReducer,
    turnOnOff: turnOnOffReducer,
    controlVolume: controlVolumeReducer,
    playWithKeys: playWithKeysReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
