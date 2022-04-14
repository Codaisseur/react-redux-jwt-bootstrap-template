import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../components/HeroBanner";

export default function LeadsheetPage() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <HeroBanner>
        <h1>Leadsheetpage</h1>
      </HeroBanner>

      <button>Hoi dik zak</button>
    </div>
  );
}
