import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Loading from '../components/loadingCircle.jsx';
import '../chakra_ui/theme'

const DashboardPage = React.lazy(() => import('./DashboardPages/index.jsx'));
const LandingPage = React.lazy(() => import('./LandingPages/index.jsx'));
const DashboardMap = React.lazy(() => import('./DashboardPages/map.jsx'));

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