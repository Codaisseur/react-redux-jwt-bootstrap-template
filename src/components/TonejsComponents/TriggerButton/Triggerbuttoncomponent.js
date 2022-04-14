import { useState } from "react";

export function TriggerbuttonsComponent(a, b) {
  const [note, setNote] = useState("");


  console.log(note);

  return (
    <div className="trigger-buttons">
      <button
        onClick={() => {
          setNote(a);
     
        }}
      >
        NOOT
      </button>
    </div>
  );
}
