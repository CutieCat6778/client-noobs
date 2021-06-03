import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import ErrorPage from '../../components/errorPage';
import Navbar from '../../components/_dashboard/Navigation';
import Header from '../../components/_dashboard/Header';
import Session from '../../components/_dashboard/Session';

export function DashboardPage({
    history,
}) {
    try {
        const { loading, error, data } = useQuery(dashboardPageQuery);
        if (error) {
            return <ErrorPage error={error}/>
        }
        if (!loading) {
            return (
                <>
                    <Navbar props={data.getUser}/>
                    <Header/>
                    <Session/>
                </>
            )
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