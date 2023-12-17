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
            <Route path={"/Knowledge-Book/"}>
                <Route path={"main/"} element={<MainPage/>}/>
                <Route path={"introduce/"} element={<Introduce/>}/>
                <Route path={"posts/"}>

                </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
