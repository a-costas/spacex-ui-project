import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Logo from '../resources/spacex-brand.png';

const GET_COMPANY_INFO = gql`
    {
        company {
            name
            founded
            summary
            valuation
            employees
            founder
            headquarters {
                city
                state
            }
        }
    }
`

const LandingContent = () => {

    const { data, loading, error } = useQuery(GET_COMPANY_INFO);

    if (loading) return (
        <p>'Loading...'</p>
    );

    if (error) return (
        <p>`Error! ${error.name}: ${error.message}`</p>
    );

    return (
        <div className='landing-content'>
            <div className="company-name">
                <img className="landing-brand" src={Logo} alt="spacex-logo" />
            </div>
            <div className="company-about">
                { data.company.name } was founded in { data.company.founded } by { data.company.founder }. { data.company.summary } Today, { data.company.name } employs { data.company.employees } and 
                is valuated at { data.company.valuation } dollars. Its headquarters are in { data.company.headquarters.city }, { data.company.headquarters.state }.
            </div>
        </div>
    );
}

export default LandingContent;
export {GET_COMPANY_INFO};