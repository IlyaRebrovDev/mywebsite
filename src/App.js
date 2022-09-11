import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import About from "./Main/About/About";


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <div className="App-wrapper">
                    <Header/>
                    <Footer/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/About" element={<About/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>)

}

export default App;
