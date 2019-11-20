import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import MapContainer from './MapContainer.jsx';

const homeStyle = {
    display: 'flex',

}

const Home = props => {
    return (
        <div style={homeStyle}>
            <div>
                <Sidebar />
            </div>
            <div>
                <MapContainer />
            </div>
        </div>
    )
}

export default Home;