import "../styles/drum.css"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setTextDisplay } from "../features/displayText/displayTextSlice"
import { selectDrumOn } from "../features/turnOnOff/turnOnOffSlice"
import { selectVolume } from "../features/controlVolume/controlVolumeSlice"

interface DrumProps {
  description: string
  text: string
  clip: string
}

interface EventTarget {
  target: any
}

export function Drum(props: DrumProps) {
  const dispatch = useAppDispatch()

  const drumOn = useAppSelector(selectDrumOn)
  const volume = useAppSelector(selectVolume)

  return (
    <div
      className="drum-pad"
      id={props.description}
      onClick={(e: EventTarget) => {
        if (drumOn) {
          const audioElement: HTMLAudioElement = e.target.firstElementChild

          dispatch(setTextDisplay(props.description))
          audioElement.volume = volume
          audioElement.play()
        }
      }}
    >
      <audio src={props.clip} className="clip" id={props.text}></audio>
      {props.text}
    </div>
  )
}
