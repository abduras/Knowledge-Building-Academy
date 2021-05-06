import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="SummaryBanner SummarySection p-0" >
                    <div className="SummaryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Row className="countSection">
                                         <Col>
                                             <h1 className="countNumber">

                                                 <CountUp start={0} end={100}>
                                                     {({ countUpRef, start }) => (
                                                         <VisibilitySensor onChange={start} delayedCall>
                                                             <span ref={countUpRef} />
                                                         </VisibilitySensor>
                                                     )}
                                                 </CountUp>
                                             </h1>
                                             <h4 className="countTitle">Total Class</h4>
                                             <hr className="bg-white w-25"/>
                                         </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={120}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Student</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </Container>
                
            </Fragment>
        );
    }
}

export default Summary;