import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Introduce from "./components/Introduce/Introduce";
import PostList from "./components/PostList/PostList";
import PostPage from "./components/PostPage/PostPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={"/"}/>
            <Route path={"/Knowledge-Book"}>
                <Route index element={<MainPage/>}/>
                <Route path={"introduce"} element={<Introduce/>}/>
                <Route path={"Posts"}>
                    <Route path={":postJsonList"} element={<PostList/>}/>
                </Route>
            </Route>
            <Route path={"/Posts"}>
                <Route path={":category"}>
                    <Route path={":postAddress"} element={<PostPage/>}/>
                </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
