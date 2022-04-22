import { useState, useCallback, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";

let volumeschakelaar = -20;
const vol = new Tone.Volume(volumeschakelaar).toDestination();

export default function Volumeslidercomp() {
  const [volume, setVolume] = useState(0);

  //   console.log(volume);

  //   let vol = new

  vol.volume.value = volume;

  return (
    <div className="volume-slider">
      <div class="slidecontainer">
        <input
          type="range"
          min="-30"
          max="0"
          value={volume}
          onChange={(e) => {
            setVolume(e.target.value);
          }}
          step="1"
        />
        volume : {volume}
      </div>
    </div>
  );
}
