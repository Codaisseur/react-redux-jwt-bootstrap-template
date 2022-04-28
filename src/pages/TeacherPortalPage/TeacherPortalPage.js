import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectUserStudents } from "../../store/user/selectors";
import { ClassStudents } from "../../store/classState/selectors";

import { FetchStudents } from "../../store/classState/actions";

import { useState, useEffect } from "react";
import {
  AddStudent,
  DelStudent,
  SaveClass,
} from "../../store/classState/actions";

export default function TeacherPortalPage() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const Students = useSelector(ClassStudents);

  useEffect(() => {
    dispatch(FetchStudents());
  }, []);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [className, setClassName] = useState();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setClassName(userData.classname);
  }, [userData.classname]);

  // ADD A STUDENT HANDLESUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setNameError("Type in a unique name for the student");
      return;
    }
    setNameError("");
    dispatch(AddStudent(name));
    setName("");
  };

  const SaveTheClass = () => {
    dispatch(SaveClass(className, password, Students, userData.id));
  };

  return (
    <div>
      <p>
        hello {userData.name} on this page you can create a class and set a
        password for your class
      </p>

      <form style={{ border: "1px dotted grey" }}>
        <strong> CHANGE YOUR CLASS SETTINGS </strong>
        <br></br>
        <label for="classname">Name of the Class:</label>
        <input
          type="text"
          name="classname"
          defaultValue={userData.classname}
          onChange={(e) => setClassName(e.target.value)}
        ></input>
        <br></br>
        <label for="classpassword">Password for the class</label>
        <input
          type="text"
          name="PASSWORD"
          defaultValue="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </form>

      <div style={{ border: "1px dotted grey" }} className="your-class">
        <h4>Your class:</h4>
        {Students.map((student) => (
          <table>
            <tr>
              {student.studentname}
              {/* <button onClick={() => dispatch(DelStudent())}>-</button> */}
            </tr>
          </table>
        ))}

        <form onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          <button type="submit">ADD STUDENT</button>
        </form>

        <button onClick={() => SaveTheClass()}>Save class</button>
      </div>
    </div>
  );
}
