import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class SelectQuiz extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Select Quiz</h1>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <Link  className="selectDetails float-left" to="/quiz">1.C Programming</Link>

                                </Col>
                            </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Link  className="selectDetails float-left" to="/quiz">2.Data Structure</Link>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Link  className="selectDetails float-left" to="/quiz">3.Algorithm</Link>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Link  className="selectDetails float-left" to="/quiz">4.Java</Link>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Link  className="selectDetails float-left" to="/quiz">5.Computer Graphics</Link>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default SelectQuiz;