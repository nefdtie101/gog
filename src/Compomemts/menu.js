// This is the menu component
import React from "react";
import './css/menu..css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class MainMenu extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.admin ===false){
            return(
                <Container fluid={true}>
                    <Row>
                        <nav className='MyNav'>
                            <Col as={'span'}><a href='/home' className='link' >Home</a></Col>
                            <Col as={'span'}><a  href='/home/account' className='link'>Account</a></Col>
                        </nav>
                    </Row>
                </Container>
            )
        }
        // This is wat admin user will see
        else{
            return(
                <Container fluid={true}>
                    <Row>
                        <nav className='MyNav'>
                            <Col as={'span'}><a href='/home' className='link' >Home</a></Col>
                            <Col as={'span'}><a  href='/home/account' className='link'>Account</a></Col>
                            <Col as={'span'}><a  href='/home/admin/Events' className='link'>Admin Events</a></Col>
                        </nav>
                    </Row>
                </Container>

            )
        }
    }
}

export default MainMenu
