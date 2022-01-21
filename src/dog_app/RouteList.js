import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import DogDetails from "./DogDetails";

const RouteList = ({ dogs }) => {
    return (
        <Routes>
            <Route path="/dogs" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/dogs" />} />
            <Route path='dogs/:name' element={<DogDetails dogs={dogs} />} />
            <Route path='*' element={<Navigate replace to="/dogs" />} />
        </Routes>
    );
}

export default RouteList;