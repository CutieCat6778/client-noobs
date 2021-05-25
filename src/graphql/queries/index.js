import {gql} from '@apollo/client';

export const dashboardPageQuery = gql`
    query dashboardPageQuery{
        getUser{
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