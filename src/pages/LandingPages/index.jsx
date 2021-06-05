import React from 'react';
import LandingIndex from './LandingIndex';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import {useQuery} from '@apollo/client'
import ErrorPage from '../../components/errorPage';
import { Box } from '@chakra-ui/layout';

export function LandingPage({
    history
}) {
    const { loading, error, data } = useQuery(dashboardPageQuery);
    if (error) {
        <ErrorPage error={error}/>
    }
    if (!loading) {
        if(!data || !data.getUser){
            return (
                <Box h="100%">
                    <LandingIndex/>
                </Box>
            )
        }else if(data){
            return (
                window.location.replace('http://noobteam.ga/')
            )
        }
    } return (
        <Box h="100%">
            <Loading />
        </Box>
    )
}

export default LandingPage