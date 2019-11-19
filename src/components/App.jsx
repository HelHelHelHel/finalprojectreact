import React, {Component} from 'react';
import MapContainer from './MapContainer.jsx';
import Login from './Login.jsx';
import './index.scss';
import RestaurantCard from './Restaurant/RestaurantCard.jsx';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "../history";
import Nav from "./Nav/Nav.jsx";
import Sidebar from './Sidebar/Sidebar.jsx'

const appStyle = {
    display: 'flex'
}

const App = () =>  {
        return (
           <>
               <Router history={history}>
                    <div>
                        <Nav/>
                        <div style={appStyle}> 
                            <Sidebar />
                            <Switch>
                                    <Route path = '/map' component={MapContainer} />
                                    <Route path = '/restaurants' component={RestaurantCard} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </>
        )
}

export default App;


{/* <div className="login">
        <Login/> 
    </div> */}