import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../components/HeroBanner";
import "./style.css";

//COMPONENTS
import SeqSoundComp from "../../components/SeqSoundSelector/SeqSoundComp";
import SeqComp from "../../components/SequencerComponent/SeqComp";
import SeqSelComp from "../../components/SequenseSelector/SeqSelComp";

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
