import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
    return (
        <ul>
            <li><NavLink to='/dogs/'>All dogs</NavLink></li>
            {dogs.map(dog => {
                return <li key={dog.name}><NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink></li>
            })}


        </ul>
    );
}
// end

export default Nav;

{/* <li><NavLink to="/">All Dogs</NavLink></li>
<li><NavLink to="/duke">Duke</NavLink></li>
<li><NavLink to="/perry">Perry</NavLink></li>
<li><NavLink to="/tubby">Tubby</NavLink></li>
<li><NavLink to="/whiskey">Whiskey</NavLink></li> */}