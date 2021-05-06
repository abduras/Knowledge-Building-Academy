import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
class Report extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>

                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Report</Form.Label>
                                    <Form.Control  as="textarea" rows="5" />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Report;
