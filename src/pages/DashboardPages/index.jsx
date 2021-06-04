import { useQuery } from '@apollo/client';
import React from 'react';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import ErrorPage from '../../components/errorPage';
import Navbar from '../../components/_dashboard/Navigation';
import Header from '../../components/_dashboard/Header';
import Session from '../../components/_dashboard/Session';
import { Box } from '@chakra-ui/layout';

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
                <Box backgroundColor="#fff5fd" h="100%" position="relative" mt={-2}>
                    <Box position="absolute">
                        <Header/>
                    </Box>
                    <Navbar props={data.getUser}/>
                    <Session/>
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