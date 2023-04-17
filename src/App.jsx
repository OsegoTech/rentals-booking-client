import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, BrowserRouter, Routes,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            {/*<Route path="/" element={Home}></Route>*/}
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
