import colors from "./colors";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


    return (
        <div>
            <p>Please Select A color</p>

            <Link to='/colors/new'>Create a new Color</Link>
        </div>
    )
}

export default Home;