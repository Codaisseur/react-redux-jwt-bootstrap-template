import React from "react";
import { useSelector } from "react-redux";
import { getUserHomepage } from "../../store/homepages/selectors";
import HomepageCard from "../../components/HomepageCard";

const MyPage = () => {
  // use a selector to get the homepages from redux.
  const userHomepage = useSelector(getUserHomepage);

  return (
    <div>
      <h1>My Page!</h1>
      <HomepageCard {...userHomepage} myPage />
    </div>
  );
};

export default MyPage;
