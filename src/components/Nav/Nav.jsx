import React from 'react';
import {Link} from "react-router-dom";

const Nav = props=> {
    return (
        <div style = {{display: "flex", flexDirection: "row nowrap"}}>
            <Link to ='/map'><h4>Map</h4></Link>
            <Link to ='/profile'><h4>Profile</h4></Link>
            <Link to ='/restaurants'><h4>Restaurants</h4></Link>
        </div>
    )
}

export default Nav;