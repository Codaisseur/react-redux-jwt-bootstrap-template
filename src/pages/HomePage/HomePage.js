import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../components/HeroBanner";
import "./style.css";

import * as Tone from "tone";

//COMPONENTS
import SeqSoundComp from "../../components/SequencorThingamabob/SeqSoundComp/SeqSoundComp";
import SeqSelComp from "../../components/SequencorThingamabob/SeqSelComp/SeqSelComp";
import SeqSaveComp from "../../components/SequencorThingamabob/SeqSaveComp/SeqSaveComp";
import SeqPatternmaker from "../TonejsPage/Seqpatternmakercomp";
import Pianonotescomponent from "../../components/TonejsComponents/Piano notes/Pianonotescomponent";

// import speaker from "../../data/speaker.png";

export default function HomePage() {
  return (
    <div className="wholething">
      <HeroBanner>
        <h1>CREATE A RHYHTM</h1>
      </HeroBanner>

      <div className="sequencerblock-style">
        <SeqSoundComp />

        {/* <SeqComp /> */}
        <SeqPatternmaker />
        <SeqSaveComp />
        <SeqSelComp />
      </div>
      <Pianonotescomponent />
    </div>
  );
}
