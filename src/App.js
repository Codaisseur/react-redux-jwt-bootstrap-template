import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import HeroBanner from "./components/HeroBanner";

import LeadsheetPage from "./pages/Leadsheet/LeadsheetPage";
import TonejsPage from "./pages/TonejsPage/TonejsPage";

import { Squares } from "./components/Squares/Squarescomponent";

const Home = () => (
  <HeroBanner>
    <h1>Geluiden muziek website</h1>
  </HeroBanner>
);
const Tone = () => (
  <HeroBanner>
    <h1>Tone</h1>
  </HeroBanner>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}

      <Routes>
        <Route exact path="/" element={<LeadsheetPage />} />
        <Route path="/squares" element={<Squares />} />
        <Route path="/tone" element={<TonejsPage />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
