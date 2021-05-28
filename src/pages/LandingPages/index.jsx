import React from 'react';
import LandingIndex from './LandingIndex';
import Loading from '../../components/loadingCircle';
import { dashboardPageQuery } from '../../graphql/queries';
import {useQuery} from '@apollo/client'

export function LandingPage({
    history
}) {
    const { loading, error, data } = useQuery(dashboardPageQuery);
    if (error) {
        console.log(error)
        return <h1>{error.toString()}</h1>
    }
    if (!loading) {
        if(!data || !data.getUser){
            return (
                <LandingIndex/>
            )
        }else if(data){
            const {
                username, discriminator
            } = data.getUser;
            return (
                history.push('/dashboard')
            )
        }
    } return (
        <div>
            <Loading/>
        </div>
    )
}

export default LandingPage