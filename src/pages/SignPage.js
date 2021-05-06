import React, {Component, Fragment} from 'react';
import SignNavigation from "../components/SignNavigation/SignNavigation";
import SignBanner from "../components/SignBanner/SignBanner";
import Footer from "../components/Footer/Footer";

class SignPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <SignNavigation title="Home"/>

                <SignBanner/>
                <Footer/>
            </Fragment>
        );
    }
}

export default SignPage;