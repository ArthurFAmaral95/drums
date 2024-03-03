import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface Volume {
  volume: number
}

const initialState: Volume = {
  volume: 0.5,
}

export const controlVolumeSlice = createSlice({
  name: "controlVolume",
  initialState,
  reducers: {
    setVolume: {
      reducer(state, action: PayloadAction<Volume>) {
        state.volume = action.payload.volume
      },
      prepare(volume: number) {
        return {
          payload: {
            volume,
          },
        }
      },
    },
  },
})

export const { setVolume } = controlVolumeSlice.actions
export const selectVolume = (state: RootState) => state.controlVolume.volume
export default controlVolumeSlice.reducer
