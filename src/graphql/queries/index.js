import {gql} from '@apollo/client';

export const dashboardPageQuery = gql`
    query dashboardPageQuery{
        getUser{
            avatar
            discordId
            discriminator
            username
            guilds {
                id
                name
            }
            location{
                country
                location
                location_id
            }
        }
    }
`;