import React, {Component} from 'react';
import MapContainer from './MapContainer.jsx';
import Login from './Login.jsx';
import './index.scss';
import RestaurantCard from './Restaurant/RestaurantCard.jsx';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "../history";
import Nav from "./Nav/Nav.jsx";


const App = () =>  {
        return (
           <div className="homepage">
               <Router history={history}>
                    <Nav/>
                    <Switch>
                            <Route path = '/map' component={MapContainer} />
                            <Route path = '/restaurants' component={RestaurantCard} />
                    </Switch>
                </Router>
            </div>
        )
}

export default App;


{/* <div className="login">
        <Login/> 
    </div> */}