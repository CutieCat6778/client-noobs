import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import { LandingPage, DashboardPage, DashboardMap } from './pages/index.jsx'

export function App() {
    return(
        <Switch>
            <Route path="/" exact={true} component={DashboardPage}/>
            <Route path="/login" exact={true} component={LandingPage}/>
            <Route path="/map" exact={true} component={DashboardMap}/>
        </Switch>
    )
}

export default App;