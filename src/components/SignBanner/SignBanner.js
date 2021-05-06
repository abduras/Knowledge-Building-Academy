import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class SignBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0" >
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">For Enroll the Course Registation First</h1>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default SignBanner;