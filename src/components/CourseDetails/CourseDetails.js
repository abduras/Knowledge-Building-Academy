import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import "video-react/dist/video-react.css"
class CourseDetails extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">

                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className="tutorialTitle">The Classes of This Course</h1>
                            <p className="tutorial" onClick={this.modalOpen}>1.What is Variable</p>
                            <p className="tutorial" onClick={this.modalOpen}>2.How to get user input</p>
                            <p className="tutorial" onClick={this.modalOpen}>3.Relational Operator</p>
                            <p className="tutorial" onClick={this.modalOpen}>4.Conditional Operator</p>
                            <p className="tutorial" onClick={this.modalOpen}>5.while vs do-while loop</p>
                            <p className="tutorial" onClick={this.modalOpen}>6.break and continue statement</p>
                            <Button variant="primary">See More</Button>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center"/>
                        </Player>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default CourseDetails;