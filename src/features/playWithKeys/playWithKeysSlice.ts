import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface KeyPressed {
  keyPressed: string
}

const initialState: KeyPressed = {
  keyPressed: "",
}

export const playWithKeysSlice = createSlice({
  name: "keyPress",
  initialState,
  reducers: {
    playDrums: {
      reducer(state, action: PayloadAction<KeyPressed>) {
        state.keyPressed = action.payload.keyPressed
      },
      prepare(key: string) {
        return {
          payload: {
            keyPressed: key.toUpperCase(),
          },
        }
      },
    },
  },
})

export const { playDrums } = playWithKeysSlice.actions
export const selectKey = (state: RootState) => state.playWithKeys.keyPressed
export default playWithKeysSlice.reducer
