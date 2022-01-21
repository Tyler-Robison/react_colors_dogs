import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import dogs from "./dogs";


const Home = () => {

    return (
        <div>
            <h2>Home</h2>

            {dogs.map(dog => {
                // console.log(dog.src);
                return <img src={`${dog.src}`}></img>
            })}

        </div>
    );
}

export default Home;