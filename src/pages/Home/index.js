import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepages } from "../../store/homepages/actions";
import { getHomepages } from "../../store/homepages/selectors";
import HomepageCard from "../../components/HomepageCard";

const Home = () => {
  // use a selector to get the homepages from redux.
  const dispatch = useDispatch();
  const homepages = useSelector(getHomepages);

  console.log("homepages", homepages);
  useEffect(() => {
    // dispatch an action to load homepages
    dispatch(fetchHomepages());
  }, [dispatch]);

  const homepagesToRender = () =>
    homepages.map(homepage => <HomepageCard key={homepage.id} {...homepage} />);

  return <div>{homepagesToRender()}</div>;
};

export default Home;

// Steps we did for point 1.
/*
- Set up router and endpoint ('/homepages/') and test with HTTPie to check if it works
- Set up skeleton of Home app page. 
- Set up reducer for homepages
- Set up action to do request, and just log result
- dispatch action from useEffect to check it does the request and logs
- set up selector and get data in the component
- display!
*/
