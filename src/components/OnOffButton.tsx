import "../styles/onOffButton.css"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectDrumOn, turnOnOff } from "../features/turnOnOff/turnOnOffSlice"
import { playDrums } from "../features/playWithKeys/playWithKeysSlice"

export function OnOffButton() {
  const drumsOn = useAppSelector(selectDrumOn)
  const dispatch = useAppDispatch()

  return (
    <div id="button-container" className={drumsOn ? "on" : "off"}>
      <div id="button-text-container">
        <span>ON</span>
        <span>OFF</span>
      </div>
      <div
        id="button"
        onClick={() => {
          dispatch(turnOnOff())
          dispatch(playDrums(""))
        }}
      ></div>
    </div>
  )
}
