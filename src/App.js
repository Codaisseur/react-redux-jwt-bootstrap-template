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

import HomePage from "./pages/HomePage/HomePage";

// import Canvas5copy from "./pages/CanvasP5/Canvasp5copy";
// import Canvas5try from "./pages/CanvasP5/Canvasp5try";

import TonejsPage from "./pages/TonejsPage/TonejsPage";

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
        <Route exact path="/" element={<HomePage />} />
        <Route path="/tone" element={<TonejsPage />} />

        {/* <Route path="/canvastry" element={<Canvas5try />} /> */}

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
