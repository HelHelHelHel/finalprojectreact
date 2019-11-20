import React, {Component} from 'react';
import './index.scss';
import Home from './Home.jsx';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "../history";
import Nav from "./Nav/Nav.jsx";

const App = () =>  {
        return (
           <>
               <Router history={history}>
                    <div>
                        <Nav/>
                        <div> 
                            <Switch>
                                    <Route path = '/home' component={Home} />
                                    {/* <Route path = '/restaurants' component={RestaurantCard} /> */}
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