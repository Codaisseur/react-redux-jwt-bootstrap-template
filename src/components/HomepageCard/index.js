import React from "react";
import { Link } from "react-router-dom";

const HomepageCard = props => {
  const bgColor = props.backgroundColor || "white";
  const textColor = props.color || "black";
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
      <Link to={`/homepages/${props.id}`}>VisitPage</Link>
    </div>
  );
};

export default HomepageCard;
