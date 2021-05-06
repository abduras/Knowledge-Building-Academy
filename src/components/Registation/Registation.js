import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Registation extends Component {

    sendRegistration(){
        let name=  document.getElementById("name").value;
        let user_name=  document.getElementById("user_name").value;
        let email_address=  document.getElementById("email_address").value;
        let password=  document.getElementById("password").value;

        let jsonObject={name:name,user_name:user_name,email_address:email_address,password:password};

        RestClient.PostRequest(AppUrl.RegistrationSend,JSON.stringify(jsonObject)).then(result=>{
            alert(result);
        }).catch(error=>{
            alert("Error");
        })

    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>

                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Name</Form.Label>
                                    <Form.Control id="name" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >User Name</Form.Label>
                                    <Form.Control id="user_name" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Email Address</Form.Label>
                                    <Form.Control id="email_address" type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Password</Form.Label>
                                    <Form.Control id="password" type="password" />
                                </Form.Group>

                                <Button onClick={this.sendRegistration} variant="primary" type="submit">
                                    Registration
                                </Button>
                            </Form>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Registation;