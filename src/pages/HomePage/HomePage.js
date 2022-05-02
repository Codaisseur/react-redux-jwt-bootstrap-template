import "./style.css";

import CanvasWaveformBackground from "../../components/CanvasP5Background/CanvasWaveformBackground";

//COMPONENTS
import PatternMakerComp from "../../components/Patternmaker/PatternMakerComp/PatternMakerComp";
import SelectSoundComp from "../../components/Patternmaker/SelectSoundComp/SelectSoundComp";
import PatternSelectorComp from "../../components/Patternmaker/PatternSelectorComp/PatternSelectorComp";
import SavePatternComp from "../../components/Patternmaker/SavePatternComp/SavePatternComp";
import RecorderComp from "../../components/Patternmaker/RecorderComp/RecorderComp";

import VolumeSliderComp from "../../components/Patternmaker/VolumeSliderComp/VolumeSliderComp";
import DelaysliderComp from "../../components/Patternmaker/DelaySliderComp/DelaysliderComp";
import FiltersliderComp from "../../components/Patternmaker/FilterSliderComp/FiltersliderComp";

export default function HomePage() {
  return (
    <div>
      <PatternMakerComp />

      <div style={{ color: "blue" }} className="pattern-components-style">
        <VolumeSliderComp />
        <DelaysliderComp />
        <SelectSoundComp />
        <RecorderComp />
        <SavePatternComp />
        <FiltersliderComp />
        <PatternSelectorComp />
      </div>

      <CanvasWaveformBackground />
    </div>
  );
}
