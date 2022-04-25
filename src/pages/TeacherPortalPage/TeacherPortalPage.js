import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { ClassStudents } from "../../store/classState/selectors";

import { useState } from "react";
import { AddStudent, DelStudent } from "../../store/classState/actions";

export default function TeacherPortalPage() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const Students = useSelector(ClassStudents);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

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

  return (
    <div>
      <p>
        hello {userData.name} on this page you can create a class and set a
        password for that class
      </p>

      <p>YOUR ID :{userData.id}</p>

      <form>
        <strong> CHANGE YOUR CLASS SETTINGS </strong>
        <br></br>
        <label for="classname">Name of the Class:</label>
        <input
          type="text"
          id="classname"
          name="classname"
          defaultValue={userData.classname}
        ></input>
        <br></br>
        <label for="classpassword">Password for the class</label>
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue="PASSWORD"
        ></input>
        <br></br>
        <input type="submit"></input>
      </form>

      <h4>Your class:</h4>
      {Students.map((student) => (
        <table>
          <tr>{student}</tr>

          <button onClick={() => dispatch(DelStudent(student))}>
            delete student
          </button>
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

      <button type="submit">Save class</button>
    </div>
  );
}
