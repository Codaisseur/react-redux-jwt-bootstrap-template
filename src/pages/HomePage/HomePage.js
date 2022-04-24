import React from "react";
import HeroBanner from "../../components/HeroBanner";
import { useSelector } from "react-redux";
import "./style.css";

import CanvasInit from "../CanvasP5/CanvasInit";

//COMPONENTS
import SelSoundComp from "../../components/Patternmaker/SelSoundComp/SelSoundComp";
import SelPatternSelector from "../../components/Patternmaker/SelPatternSelector/SelPatternSelector";
import SeqSaveComp from "../../components/Patternmaker/SeqSaveComp/SeqSaveComp";
import SeqPatternmaker from "../../components/Patternmaker/SequencerComponent/Seqpatternmakercomp";

import Recordercomponent from "../../components/Patternmaker/recorder/Recordercomponent";

import Volumeslidercomp from "../../components/Patternmaker/Volumeslidercomp/Volumeslidercomp";
import Delayslidercomp from "../../components/Patternmaker/delayslidercomp/Delayslidercomp";
import Filterslidercomp from "../../components/Patternmaker/Filterslidercomp/Filterslidercomp";

export default function HomePage() {
  return (
    <div>
      <SeqPatternmaker />

      <div className="wholething">
        <div className="sequencerblock-style">
          <Volumeslidercomp />

          <Delayslidercomp />

          <SelSoundComp />

          <Recordercomponent />

          <SeqSaveComp />

          <Filterslidercomp />

          <SelPatternSelector />
        </div>

        <CanvasInit />
      </div>
    </div>
  );
}
