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
import StartstopComp from "../../components/seqPatternMakerComponents/Startstopcomp/Startstopcomp";
import Recordercomponent from "../../components/seqPatternMakerComponents/recorder/Recordercomponent";

export default function HomePage() {
  const TpState = useSelector(Transportstate);

  console.log("TpState:", TpState);

  return (
    <div className="wholething">
      <div className="sequencerblock-style">
        <SelSoundComp />
        <Recordercomponent />
        <div>
          <SeqPatternmaker />
          <StartstopComp />
        </div>
        <SeqSaveComp />
        <SelPatternSelector />
      </div>

      <CanvasInit />
    </div>
  );
}
