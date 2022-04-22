import React from "react";
import HeroBanner from "../../components/HeroBanner";
import { useSelector } from "react-redux";
import "./style.css";

import CanvasInit from "../CanvasP5/CanvasInit";

import { Transportstate } from "../../store/seqState/selectors";

//COMPONENTS
import SelSoundComp from "../../components/seqPatternMakerComponents/SelSoundComp/SelSoundComp";
import SelPatternSelector from "../../components/seqPatternMakerComponents/SelPatternSelector/SelPatternSelector";
import SeqSaveComp from "../../components/seqPatternMakerComponents/SeqSaveComp/SeqSaveComp";
import SeqPatternmaker from "../../components/seqPatternMakerComponents/SequencerComponent/Seqpatternmakercomp";

//SPEAKERS
import speaker from "../../data/speaker.png";
import speakerlinks from "../../data/speakerlinks.png";
import TBREEL from "../../data/TBREEL.png";
import TBREELlinks from "../../data/TBREELlinks.png";
import TBREELrechts from "../../data/TBREELrechts.png";

export default function HomePage() {
  const TpState = useSelector(Transportstate);

  return (
    <div className="wholething">
      <div className="sequencerblock-style">
        <SelSoundComp />

        <SeqPatternmaker />
        <CanvasInit />
        <SeqSaveComp />
        <SelPatternSelector />
      </div>

      <img
        style={{ position: "absolute", bottom: "-2%", left: "-2%" }}
        src={speakerlinks}
        alt="speakerlinks"
        height="455"
      />
      <img
        style={{ position: "absolute", bottom: "-4%", right: "-1%" }}
        src={speaker}
        alt="speaker"
        height="460"
      />

      <div className="tbreel-style">
        <img style={{}} src={TBREEL} alt="TBREEL" height="345" />

        <div
          style={
            TpState === "started"
              ? { animation: "spin 4s linear infinite" }
              : { animation: "stop" }
          }
          className="draaiding1"
        >
          <img src={TBREELrechts} alt="TBREELrechts" />
        </div>

        <div
          style={
            TpState === "started"
              ? { animation: "spin 4s linear infinite" }
              : { animation: "stop" }
          }
          className="draaiding2"
        >
          <img src={TBREELlinks} alt="TBREELlinks" />
        </div>
      </div>
    </div>
  );
}
