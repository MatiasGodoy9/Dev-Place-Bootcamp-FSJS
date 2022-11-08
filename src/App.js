import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import Hijos from './components/Hijos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App() {
    return (
        <Router>
            <Header/>
            <Hijos tipo="h1">
                <Hijos tipo={"h2"}/>
                <Hijos tipo={"h3"}/>
            </Hijos>
            <Cards />
            <Footer/>
        </Router>
    )
}

export default App;