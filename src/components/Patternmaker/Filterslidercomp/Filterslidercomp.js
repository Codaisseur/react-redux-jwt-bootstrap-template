import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { seqSettingsfilteraction } from "../../../store/seqState/actions";

export default function Filterslidercomp() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState(20000);

  useEffect(() => {
    dispatch(seqSettingsfilteraction(filter));
  }, [dispatch, filter]);

  return (
    <div>
      <div id="filterDIV" className="slider-style">
        Filter <br></br>
        {filter}
        <div className="slidecontainer">
          <input
            type="range"
            min="50"
            max="5000"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            step="1"
          />
        </div>
      </div>
    </div>
  );
}
