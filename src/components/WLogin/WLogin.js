import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class WLogin extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>

                            <Form>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >User Name</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Password</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Button>
                                    <Link  className="cDetails float-left" to="/CourseDetails/:CourseID">Submit</Link>
                                </Button>


                                <Link  className="Details" to="/CourseDetails/:CourseID">submit</Link>


                            </Form>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WLogin;