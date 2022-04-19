import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../components/HeroBanner";
import "./style.css";

export default function LeadsheetPage() {
  const [soundStyle, setSoundStyle] = useState("");
  const [artistBool, setArtistbool] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  console.log(artistBool);

  return (
    <div className="wholething">
      <HeroBanner>
        <h1>MUSICAL THINGAMABOB</h1>
      </HeroBanner>

      <div className="sequencerblock-style">
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
        <div className="sequencer-style">
          <h2>SEQUENSOR THINGAMABOB</h2>

          <table>
            <tr>
              <th>SOUND</th>
              <th>1</th>
              <th>e</th>
              <th>2</th>
              <th>e</th>
              <th>3</th>
              <th>e</th>
              <th>4</th>
              <th>e</th>
            </tr>
            <tr>
              <td>TIK</td>

              <input
                type="checkbox"
                value={artistBool[2]}
                onChange={() => {
                  artistBool[2] = "HOI";
                  console.log("hoi idioot", artistBool);
                }}
              ></input>
            </tr>
            <tr>
              <td>BOEM</td>
              <td>1</td>
              <td>e</td>
              <td>2</td>
              <td>e</td>
              <td>3</td>
              <td>e</td>
              <td>4</td>
              <td>e</td>
            </tr>
          </table>
        </div>
        <div className="seq-selector-style">
          <h2>SEQ Selector</h2>

          <table>
            <tr>
              <th>SEQ NAME</th>
              <th>SELECT</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>
                <select onChange={(e) => setSoundStyle(e.target.value)}>
                  <option value="SELECT">SEL</option>
                  <option value="DIRK RHYTHM">DIRK RHYHTM</option>
                  <option value="TEACHER ">TEACHER</option>
                  <option value="OTHER ONE">OTHER ONE</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>TEACHER</td>
              <td>
                <select onChange={(e) => setSoundStyle(e.target.value)}>
                  <option value="SELECT">SEL</option>
                  <option value="DIRK RHYTHM">DIRK RHYHTM</option>
                  <option value="TEACHER ">TEACHER</option>
                  <option value="OTHER ONE">OTHER ONE</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>DIFFICULT</td>
              <td>
                <select onChange={(e) => setSoundStyle(e.target.value)}>
                  <option value="SELECT">SEL</option>
                  <option value="DIRK RHYTHM">DIRK RHYHTM</option>
                  <option value="TEACHER ">TEACHER</option>
                  <option value="OTHER ONE">OTHER ONE</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>NEW</td>
              <td>
                <select onChange={(e) => setSoundStyle(e.target.value)}>
                  <option value="SELECT">SEL</option>
                  <option value="DIRK RHYTHM">DIRK RHYHTM</option>
                  <option value="TEACHER ">TEACHER</option>
                  <option value="OTHER ONE">OTHER ONE</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
