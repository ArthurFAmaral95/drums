import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

interface TextState {
  text: string
}

const initialState: TextState = {
  text: "Drums",
}

export const displayTextSlice = createSlice({
  name: "displayText",
  initialState,
  reducers: {
    setTextDisplay: {
      reducer(state, action: PayloadAction<TextState>) {
        state.text = action.payload.text
      },
      prepare(text: string) {
        return {
          payload: {
            text,
          },
        }
      },
    },
  },
})

export const { setTextDisplay } = displayTextSlice.actions
export const selectText = (state: RootState) => state.displayText.text
export default displayTextSlice.reducer
