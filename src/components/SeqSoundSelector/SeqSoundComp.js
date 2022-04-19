import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../components/HeroBanner";
// import "./style.css";

export default function SeqSoundComp() {
  const [soundStyle, setSoundStyle] = useState("");

  return (
    <div className="sound-selector-style">
      <h2>Sound Selector</h2>
      <select onChange={(e) => setSoundStyle(e.target.value)}>
        <option value="Sound selector">Sound Selector</option>
        <option value="Loud">Loud</option>
        <option value="Soft">Soft</option>
        <option value="Metal">Metal</option>
        <option value="Wood">Wood</option>
      </select>
    </div>
  );
}
