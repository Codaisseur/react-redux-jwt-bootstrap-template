import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

import { SavedPatterns } from "../../store/seqState/selectors";

export default function RitmesPage() {
  const Savedpatterns = useSelector(SavedPatterns);

  Savedpatterns.map((pattern) => console.log(pattern));

  return (
    <div>
      {Savedpatterns.map((pattern) => (
        <div className="ritme-card">
          <div id="patname">{pattern.name}</div>
          {pattern.pattern.map((row, y) => (
            <table>
              <tr>
                <div key={y}>
                  {row.map((value, x) => (
                    <th
                      style={
                        value === 1
                          ? {
                              background: `linear-gradient(to left, rgba(255,255,255,1), ${pattern.color})`,
                            }
                          : { backgroundColor: "transparent" }
                      }
                    ></th>
                  ))}
                </div>
              </tr>
            </table>
          ))}
        </div>
      ))}
    </div>
  );
}
