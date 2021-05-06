import React, {Component,Fragment} from 'react';
import SignNavigation from "../components/SignNavigation/SignNavigation";
import PageTop from "../components/PageTop/PageTop";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

class LoginPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <SignNavigation title="Login"/>
                <PageTop pagetitle="Login" />
                <Login/>
                <Footer/>
            </Fragment>
        );
    }
}

export default LoginPage;