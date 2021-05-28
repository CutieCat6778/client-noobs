import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import DashboardNavigation from './DashboardNavigation';
import DashboardHeader from './DashboardHeader';

export function DashboardPage({
    history,
}) {
    try {
        const { loading, error, data } = useQuery(dashboardPageQuery);

        if (error) {
            console.error(error)
            return <h1>500 Internal server error <br/> {error.toString()}</h1>
        }
        if (!loading) {
            if (!data || !data.getUser) {
                console.log(data.getUser);
                return history.push('/')
            } else if (data) {
                console.log("Hello", data.getUser)
                return (
                    <div>
                        <DashboardNavigation props={data.getUser} />
                        <DashboardHeader userData={data.getUser} />
                    </div>
                )
            }
        } return (
            <div>
                <Loading />
            </div>
        )
    } catch (e) {
        console.error("Error!", e)
    }
}

export default DashboardPage