import{gql}from"@apollo/client";export const updateUserLocationMutation=gql`mutation updateUserLocation($discordId: String!,$location: String!,$country: String!,$location_id: String!){updateUserLocation(discordId: $discordId, location: $location, country: $country, location_id: $location_id){discordId
location{
    location
    location_id
    country
}}}`;