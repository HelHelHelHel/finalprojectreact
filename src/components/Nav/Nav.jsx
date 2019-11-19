import React from 'react';
import {Link} from "react-router-dom";

const headerStyle = {
    display: 'flex',
    flexDirection: 'row nowrap',
    justifyContent: 'space-between'
}

const navStyle = {
    display: 'flex',
    flexDirection: 'row nowrap',
}

const linkStyle = {
    marginRight: '0.5rem'
}

const Nav = props => {
    return (
        <div style={headerStyle}>
            <h2 style={{ marginLeft: '1rem'}} >eatAnywhere</h2>
            <div style={navStyle} >
                <Link style={linkStyle} to ='/map'><h4>Map</h4></Link>
                <Link style={linkStyle} to ='/restaurants'><h4>Restaurants</h4></Link>
                <Link style={linkStyle} to ='/profile'><h4>Profile</h4></Link>
            </div>
        </div>
    )
}

export default Nav;