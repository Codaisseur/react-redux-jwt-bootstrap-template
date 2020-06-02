import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserHomepage } from "../../store/homepages/selectors";
import HomepageCard from "../../components/HomepageCard";
import EditMyPageForm from "../../components/EditMyPageForm";
import Button from "react-bootstrap/Button";

const MyPage = () => {
  // use a selector to get the homepages from redux.
  const userHomepage = useSelector(getUserHomepage);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <h1>My Page!</h1>
      {editMode ? (
        <EditMyPageForm {...userHomepage} />
      ) : (
        <HomepageCard {...userHomepage} myPage />
      )}
      <Button variant='primary' onClick={() => setEditMode(!editMode)}>
        Edit
      </Button>
    </div>
  );
};

export default MyPage;
