import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../components/HeroBanner";
// import "./style.css";

export default function SeqSelComp() {
  const [soundStyle, setSoundStyle] = useState("");

  return (
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
  );
}
