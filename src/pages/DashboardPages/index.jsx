import { useQuery } from '@apollo/client';
import React from 'react';
import { dashboardPageQuery } from '../../graphql/queries';

export function DashboardPage({
    history
}) {
    const { loading, error, data } = useQuery(dashboardPageQuery);


    if (error) {
        return <h1>{error.toString()}</h1>
    }
    if (!loading) {
        const {
            username, discriminator
        } = data.getUser;

        console.log(data, username)
        return (
            <div>
                <h1>Welcome {username}</h1>
            </div>
        )
    } return <h1>Loading...</h1>
}

export default DashboardPage