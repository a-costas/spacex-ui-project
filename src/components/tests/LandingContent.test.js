import { waitFor } from '@testing-library/react';
import LandingContent from '../LandingContent';
import { GET_COMPANY_INFO } from '../LandingContent';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
    {
        request: {
            query: GET_COMPANY_INFO,
            variables: {},
        },
        result: {
            data: {
                company: {
                    name: 'SpaceX',
                    founded: 2002,
                    summary: 'SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.',
                    valuation: 27500000000,
                    employees: 7000,
                    founder: 'Elon Musk',
                    headquarters: {
                        city: 'Hawthorne',
                        state: 'California'
                    }
                }
            }
        }
    }
];

it('renders without error', () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <LandingContent />
        </MockedProvider>
    );

    const tree = component.toJSON();
    expect(tree.children[0]).toContain('Loading...');
})

it('should render landing content', () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <LandingContent />
        </MockedProvider>
    );

    expect(component).toMatchSnapshot();
});

it('should render landing content', async () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <LandingContent />
        </MockedProvider>
    );

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(component).toMatchSnapshot();
})