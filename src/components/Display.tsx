import "../styles/display.css"

import { useAppSelector } from "../app/hooks"

import { selectText } from "../features/displayText/displayTextSlice"

export function Display() {
  const text = useAppSelector(selectText)

  return <div id="display">{text}</div>
}
