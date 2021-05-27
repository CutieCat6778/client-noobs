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
            }
        }
    }
`;

export const getLocation = gql`
    query dashboardPageQuery{
        getUser{
            discordId
            location{
                country
                location
                location_id
            }
        }
    }
`;