import { useDispatch } from "react-redux";

const TriggerToggle = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="trigger-toggle">
      <p>Atrig {props.Atrig}</p>
      {props.Atrig === true ? <p>true</p> : <p>false</p>}
    </div>
  );
};

export default TriggerToggle;
