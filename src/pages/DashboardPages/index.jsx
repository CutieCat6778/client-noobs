import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import ErrorPage from '../../components/errorPage';
import Navbar from '../../components/_dashboard/navbar/Navigation';
import Header from '../../components/_dashboard/Header';
import Session from '../../components/_dashboard/session/Session';
import { Box } from '@chakra-ui/layout';
import Footer from '../../components/_dashboard/footer/Footer';

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
                <Box backgroundColor="white" h="100%" position="relative" mt={-2}>
                    <Navbar props={data.getUser}/>
                    <Header/>
                    <Session/>
                    <Footer/>
                </Box>
            )
        } return (
            <Box h="100%">
                <Loading />
            </Box>
        )
    } catch (e) {
        console.error("Error!", e)
    }
}

export default DashboardPage