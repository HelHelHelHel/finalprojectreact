import React, {Component} from 'react';
import MapContainer from './MapContainer.jsx';
import Login from './Login.jsx';
import './index.scss';

export default class App extends Component {
    render(){
        return (
           <div className="homepage">
                <div className="login">
                    <Login/>
                </div>
                <div>
                    <MapContainer/>
                </div>
            </div>
        )
    }
}