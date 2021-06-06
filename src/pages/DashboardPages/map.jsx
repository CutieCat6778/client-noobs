import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import DashboardHeader from '../../components/_map/DashboardHeader';
import ErrorPage from '../../components/errorPage';
import Navbar from '../../components/_dashboard/navbar/Navigation';
import { Box } from '@chakra-ui/layout';
import Footer from '../../components/_dashboard/footer/Footer';

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
                return window.location.replace('/login')
            } else if (data) {
                return (
                    <Box h="100%">
                        <Navbar props={data.getUser}/>
                        <DashboardHeader userData={data.getUser} />
                        <Footer/>
                    </Box>
                )
            }
        } return (
            <Box h="100%">
                <Loading />
            </Box>
        )
    } catch (e) {
        console.error("Error!", e)
    }
}

export default DashboardMap