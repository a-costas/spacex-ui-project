import React from 'react';
import { gql, useQuery } from '@apollo/client';
import MissionsDropdown from './MissionsDropdown';

const GET_MISSIONS = gql`
    {
        missions {
            name
            id
            description
            manufacturers
            payloads {
            nationality
            orbit
            }
        }
    }
`

const Missions = () => {

    const { data, loading, error} = useQuery(GET_MISSIONS);

    if (loading) return (
        <p>'Loading...'</p>
    );

    if (error) return (
        <p>`Error! ${error.name}: ${error.message}`</p>
    );

    return (
        <div className="missions-container">

            <MissionsDropdown {...data} />
        
        </div>
    );
};

export default Missions;