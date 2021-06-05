import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Loading from '../components/loadingCircle.jsx';
import '../chakra_ui/theme'

import DashboardPage from './DashboardPages/index.jsx';
import LandingPage from './LandingPages/index.jsx';
import DashboardMap from './DashboardPages/map.jsx';

export function Routers(){
    return(
        <Switch>
            <React.Suspense fallback={<Loading/>}>
                <Route path="/" exact={true} component={DashboardPage}/>
                <Route path="/login" exact={true} component={LandingPage}/>
                <Route path="/map" exact={true} component={DashboardMap}/>
            </React.Suspense>
        </Switch>
    )
}

export default Routers;