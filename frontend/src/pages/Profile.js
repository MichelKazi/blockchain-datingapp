import React, { Component } from 'react';
import Settings from '../components/Settings.js';
import { Container, Row, Col, Image} from 'react-bootstrap';
// import smartcontracts from './components/smartcontracts.js';

class Profile extends Component {
    render() {
        return (
            <div>
                My Profile
                <Row>  
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                </Row>
            <Settings/>
            {/* <smartcontracts/> */}
            </div>
        );
    }
}

export default Profile;