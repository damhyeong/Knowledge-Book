import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<MainPage/>}>

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
