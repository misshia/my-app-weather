import React from "react";
import './App.css';
import Footer from "./Footer";
import Weather from "./Weather"

export default function App() {
  return <div className="App">
    <div className="container">
       
        <Weather />
        <Footer />
    </div>
         </div>;
}


