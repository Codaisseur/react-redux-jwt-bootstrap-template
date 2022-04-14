import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LeadsheetPage() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <p>Leadsheetpage</p>
      <button>Hoi dik zak</button>
    </div>
  );
}
