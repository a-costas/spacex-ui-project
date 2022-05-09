import { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';


class MissionsDropdown extends Component {

    constructor(props) {
        super(props)

        this.state = {            
            isFiltered: false,
            filtered: this.props,
            isSorted: false,
            sorted: this.props
        }
    }

    handleSelectSort=(e)=>{

        this.setState({
            isFiltered: false,
            filtered: this.props
        })

        let sorted;

        switch (e) {
            case "#/mission-id":
                sorted = sortByMissionID(this.props);
                this.state.isSorted = true;
                break;
            
            case "#/mission-name":
                sorted = sortByMissionName(this.props);
                this.state.isSorted = true;
                break;

            case "#/mission-nationality":
                sorted = sortByMissionNationality(this.props);
                this.state.isSorted = true;
                break;

            default:
                sorted = this.props;
                this.state.isSorted = false;
                break;
        }

        this.setState({
            sorted: sorted
        })
    }

    handleSelectFilterManufacturer=(e)=>{

        let filtered = filterByManufacturers(this.props, e.substring(2));
        this.setState({
            isFiltered: true,
            filtered: filtered
        })
    }

    render() {

        let missionData = this.props;

        let missions

        if (!this.state.isFiltered && !this.state.isSorted) {
            missions = <div className='mission-list-container'>
                {missionData.missions.map((mission) => (
                    <Card className="mission-card" bg="secondary" key={mission.id} style={{ width: '100%'  }}>
                        <Card.Body>
                            <Card.Title className="card-title">{mission.name}</Card.Title>
                            <Card.Subtitle className="card-subtitle">ID: {mission.id}</Card.Subtitle>
                            <Card.Subtitle className="card-subtitle">Nation: {mission.payloads[0].nationality}</Card.Subtitle>
                            <Card.Text className="card-text">{mission.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        } else if (!this.state.isFiltered && this.state.isSorted) {
            missions = <div className='mission-list-container'>
                {this.state.sorted.map((mission) => (
                    <Card className="mission-card" bg="secondary" key={mission.id} style={{ width: '100%'  }}>
                        <Card.Body>
                            <Card.Title className="card-title">{mission.name}</Card.Title>
                            <Card.Subtitle className="card-subtitle">ID: {mission.id}</Card.Subtitle>
                            <Card.Subtitle className="card-subtitle">Nation: {mission.payloads[0].nationality}</Card.Subtitle>
                            <Card.Text className="card-text">{mission.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        } else {
            missions = <div className='mission-list-container'>
                {this.state.filtered.map((mission) => (
                    <Card className="mission-card" bg="secondary" key={mission.id} style={{ width: '100%'  }}>
                        <Card.Body>
                            <Card.Title className="card-title">{mission.name}</Card.Title>
                            <Card.Subtitle className="card-subtitle">ID: {mission.id}</Card.Subtitle>
                            <Card.Subtitle className="card-subtitle">Nation: {mission.payloads[0].nationality}</Card.Subtitle>
                            <Card.Text className="card-text">{mission.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        }

        return (
            <div className='missions'>

                <div className="dropdown-container">

                    <div>

                        <div className="mb-2">

                            <Dropdown className="dropdown-button">

                                <DropdownButton className="dropdown-button" variant="secondary" title="Filter by manufacturer:" onSelect={this.handleSelectFilterManufacturer}>

                                    <Dropdown.Item href="#/">Default (No filter)</Dropdown.Item>
                                    <Dropdown.Item href="#/SSL">SSL</Dropdown.Item>
                                    <Dropdown.Item href="#/orbital-ATK">Orbital ATK</Dropdown.Item>
                                    <Dropdown.Item href="#/spaceX">SpaceX</Dropdown.Item>
                                    <Dropdown.Item href="#/sierra-nevada-corporation">Sierra Nevada Corporation</Dropdown.Item>
                                    <Dropdown.Item href="#/boeing">Boeing</Dropdown.Item>
                                    <Dropdown.Item href="#/airbus-defence-and-space">Airbus Defence and Space</Dropdown.Item>

                                </DropdownButton>
                                    
                                </Dropdown>

                                <Dropdown className="dropdown-button">

                                <DropdownButton className="dropdown-button" variant="secondary" title="Sort by:" onSelect={this.handleSelectSort}>

                                    <Dropdown.Item href="#/">Default</Dropdown.Item>
                                    <Dropdown.Item href="#/mission-id">Mission ID</Dropdown.Item>
                                    <Dropdown.Item href="#/mission-name">Mission name</Dropdown.Item>
                                    <Dropdown.Item href="#/mission-nationality">Nationality</Dropdown.Item>

                                </DropdownButton>
                                    
                            </Dropdown>

                        </div>

                    </div>

                    <p  style={{ fontSize: '1rem' }}>Note: Sorts and filters are applied one at a time, not on top of each other.</p>
                </div>

                <div className="mission-container">
                    {missions}
                </div>

            </div>
        )   
    }
}

// Can clean this up by generalizing to one method that takes in a field to sort by to cut down on repetitiveness

function sortByMissionName(data) {

    let newOrder = JSON.parse(JSON.stringify(data))
    return newOrder.missions.sort((a,b) => (a.name > b.name) ? 1 : -1 );
}

function sortByMissionID(data) {

    let newOrder = JSON.parse(JSON.stringify(data))
    return newOrder.missions.sort((a,b) => (a.id > b.id) ? 1 : -1 );
}

function sortByMissionNationality(data) {

    let newOrder = JSON.parse(JSON.stringify(data))
    return newOrder.missions.sort((a,b) => (a.payloads[0].nationality > b.payloads[0].nationality) ? 1 : -1 );
}

// Variable names here are a little confusing, could be improved for clarity that what's being returned is filtered
function filterByManufacturers(data, manufacturer) {

    let filtered = JSON.parse(JSON.stringify(data));

    // This could be improved to be dynamically populated
    switch (manufacturer) {
        case "SSL":
            return filtered.missions.filter(mission => {
                return mission.manufacturers.includes("SSL");
            });
        
        case "orbital-ATK":
            return filtered.missions.filter(mission => {
                return mission.manufacturers.includes("Orbital ATK");
            });

        case "spaceX":
            return filtered.missions.filter(mission => {
                return mission.manufacturers.includes("SpaceX");
            });

        case "sierra-nevada-corporation":
            return filtered.missions.filter(mission => {
                return mission.manufacturers.includes("Sierra Nevada Corporation");
            });

        case "boeing":
            return filtered.missions.filter(mission => {
                return mission.manufacturers.includes("Boeing");
            });

        case "airbus-defence-and-space":
            return filtered.missions.filter(mission => {
                return mission.manufacturers.includes("Airbus Defence and Space");
            });

        default:
            return filtered.missions;
    }
}

export default MissionsDropdown;