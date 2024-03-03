import "../styles/volume.css"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  selectVolume,
  setVolume,
} from "../features/controlVolume/controlVolumeSlice"

export function VolumeInput() {
  const volume = useAppSelector(selectVolume)
  const dispatch = useAppDispatch()

  return (
    <div id="volume-container">
      <label htmlFor="volume">Volume</label>
      <div>
        <span>0</span>
        <input
          type="range"
          id="volume"
          min={0}
          max={1}
          value={volume}
          step={0.05}
          onChange={e => {
            dispatch(setVolume(Number(e.target.value)))
          }}
        />
        <span>{Math.floor(volume * 100)}</span>
      </div>
    </div>
  )
}
