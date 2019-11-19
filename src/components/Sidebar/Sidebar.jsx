import React from 'react';

const sidebarStyle = {
    border: '1px solid black',
    height: '80vh',
    width: '30vw'
}
const Sidebar = props => {
    return (
        <div style={sidebarStyle}>
            <h3>Sidebar</h3>
        </div>
    )
}

export default Sidebar;