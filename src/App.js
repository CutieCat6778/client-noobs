import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import { LandingPage, DashboardPage } from './pages/index.jsx'

export function App() {
    return(
        <Switch>
            <Route path="/" exact={true} component={LandingPage}/>
            <Route path="/dashboard" exact={true} component={DashboardPage}/>
        </Switch>
    )
}

export default App;