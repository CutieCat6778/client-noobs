import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';

export function DashboardPage({
    history
}) {
    const { loading, error, data } = useQuery(dashboardPageQuery);
    if (error) {
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
            /*
            return (
                <div>
                    <h1>Welcome {username}</h1>
                </div>
            ) */
        }
    } return (
        <div>
            <Loading/>
        </div>
    )
}

export default DashboardPage