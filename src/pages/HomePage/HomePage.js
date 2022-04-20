import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../components/HeroBanner";
import "./style.css";

//COMPONENTS
import SeqSoundComp from "../../components/SequencorThingamabob/SeqSoundComp/SeqSoundComp";
import SeqComp from "../../components/SequencorThingamabob/SequencerComponent/SeqComp";
import SeqSelComp from "../../components/SequencorThingamabob/SeqSelComp/SeqSelComp";

import speaker from "../../data/speaker.png";

export default function HomePage() {
  return (
    <div className="wholething">
      <HeroBanner>
        <h1>HOME THINGAMABOBHOME </h1>
      </HeroBanner>

      <div className="sequencerblock-style">
        <SeqSoundComp />

        <SeqComp />

        <SeqSelComp />
      </div>

      <img src={speaker} />
    </div>
  );
}
