import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Color from "./Color";
import ColorForm from "./ColorForm";
import CSSValidator from "./helpers";

const RouteList = ({ setColors, colors }) => {
    return (
        <Routes>
            <Route path="/colors" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/colors" />} />
            <Route path='colors/:color' element={<Color colors={colors} />} />
            <Route path='colors/new' element={<ColorForm setColors={setColors} colors={colors} CSSValidator={CSSValidator} />} />
            <Route path='*' element={<Navigate replace to="/colors" />} />
        </Routes>
    );
}

export default RouteList;