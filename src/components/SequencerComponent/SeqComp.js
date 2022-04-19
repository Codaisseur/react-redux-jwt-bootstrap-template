import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SeqComp() {
  const [artistBool, setArtistbool] = useState([false, false, false, false]);
  console.log(artistBool);
  const [soundStyle, setSoundStyle] = useState("");

  return (
    <div className="sequencer-style">
      <h2>SEQUENSOR THINGAMABOB</h2>

      <table>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>

        <tr>
          <th>
            <input
              type="checkbox"
              value={artistBool[0]}
              onChange={() => {
                artistBool[0] = "HOI";
                console.log("hoi idioot", artistBool);
              }}
            ></input>
          </th>
          <th>
            <input
              type="checkbox"
              value={artistBool[1]}
              onChange={() => {
                artistBool[1] = "HOI";
                console.log("hoi idioot", artistBool);
              }}
            ></input>
          </th>
          <th>
            <input
              type="checkbox"
              value={artistBool[2]}
              onChange={() => {
                artistBool[2] = "HOI";
                console.log("hoi idioot", artistBool);
              }}
            ></input>
          </th>
          <th>
            <input
              type="checkbox"
              value={artistBool[3]}
              onChange={() => {
                artistBool[3] = "HOI";
                console.log("hoi idioot", artistBool);
              }}
            ></input>
          </th>
        </tr>

        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
    </div>
  );
}
