import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import DashboardNavigation from '../../components/_map/DashboardNavigation';
import DashboardHeader from '../../components/_map/DashboardHeader';
import ErrorPage from '../../components/errorPage';

export function DashboardMap({
    history,
}) {
    try {
        const { loading, error, data } = useQuery(dashboardPageQuery);
        if (error) {
            return <ErrorPage error={error}/>
        }
        if (!loading) {
            if (!data || !data.getUser) {
                return history.push('/')
            } else if (data) {
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

export default DashboardMap