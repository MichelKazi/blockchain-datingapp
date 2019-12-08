import React, { Component } from 'react';
import Settings from '../components/Settings.js';
// import { Container, Row, Col, Image} from 'react-bootstrap';
import manhoodie from '../images/manhoodie.jpg';

// import smartcontracts from './components/smartcontracts.js';

class Profile extends Component {
    render() {
        return (
            <div>
                 <img src={manhoodie} alt="fire"></img>
            <Settings/>
            </div>
        );
    }
}

export default Profile;