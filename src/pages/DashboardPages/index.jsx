import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import DashboardNavigation from './DashboardNavigation';
import DashboardHeader from './DashboardHeader';

export function DashboardPage({
    history
}) {
    const { loading, error, data } = useQuery(dashboardPageQuery);
    if (error) {
        console.error(error)
        return <h1>{error.toString()}</h1>
    }
    if (!loading) {
        if(!data || !data.getUser){
            console.log(data.getUser);
            return history.push('/')
        }else if(data){
            const {
                username, discriminator
            } = data.getUser;
            return (
                <div>
                    <DashboardNavigation props={data.getUser}/>
                    <DashboardHeader props={data.getUser.location}/>
                </div>
            )
        }
    } return (
        <div>
            <Loading/>
        </div>
    )
}

export default DashboardPage