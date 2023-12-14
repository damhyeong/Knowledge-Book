import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Introduce from "./components/Introduce/Introduce";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={"/Knowledge-Book/"} element={<MainPage/>}>
            </Route>
            <Route path={"/Introduce/"} element={<Introduce/>}>

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
