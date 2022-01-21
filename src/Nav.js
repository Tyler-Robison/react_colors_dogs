import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ colors }) {
    return (
        <ul>
            <li key='colors'><NavLink to='/colors'>All colors</NavLink></li>
            {colors.map(color => {
                return <li key={color}><NavLink to={`/colors/${color}`}>{color}</NavLink></li>
            })}
        </ul>
    );
}
// end

export default Nav;