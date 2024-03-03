import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

interface DrumsOn {
  drumsOn: boolean
}

const initialState: DrumsOn = {
  drumsOn: true,
}

export const turnOnOffSlice = createSlice({
  name: "turnOnOffDrums",
  initialState,
  reducers: {
    turnOnOff: state => {
      state.drumsOn = !state.drumsOn
    },
  },
})

export const { turnOnOff } = turnOnOffSlice.actions

export const selectDrumOn = (state: RootState) => state.turnOnOff.drumsOn

export default turnOnOffSlice.reducer
