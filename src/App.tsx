import "./styles/globals.css"
import "./styles/app.css"

import { Drum } from "./components/Drum"
import { Display } from "./components/Display"
import { OnOffButton } from "./components/OnOffButton"
import { VolumeInput } from "./components/VolumeInput"

const App = () => {
  const drumPads = [
    {
      key: "Q",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description: "Heater 1",
    },
    {
      key: "W",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description: "Heater 2",
    },
    {
      key: "E",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description: "Heater 3",
    },
    {
      key: "A",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description: "Heater 4",
    },
    {
      key: "S",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description: "Clap",
    },
    {
      key: "D",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description: "Open-HH",
    },
    {
      key: "Z",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description: "Kick-n`-Hat",
    },
    {
      key: "X",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description: "Kick",
    },
    {
      key: "C",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description: "Closed-HH",
    },
  ]

  return (
    <div id="drum-machine">
      <div id="drum-pads-container">
        {drumPads.map(pad => {
          return (
            <Drum
              text={pad.key}
              description={pad.description}
              clip={pad.audioSrc}
              key={pad.key}
            />
          )
        })}
      </div>
      <div id="display-container">
        <OnOffButton />
        <VolumeInput />
        <Display />
      </div>
    </div>
  )
}

export default App
