import React, {Component,Fragment} from 'react';
import SignNavigation from "../components/SignNavigation/SignNavigation";
import PageTop from "../components/PageTop/PageTop";
import Registation from "../components/Registation/Registation";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

class RegistationPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <SignNavigation title="Registation"/>
                <PageTop pagetitle="Registation Here" />
                <Registation/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RegistationPage;