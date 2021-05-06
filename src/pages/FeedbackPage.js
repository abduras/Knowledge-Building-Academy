import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";

class FeedbackPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Feedback"/>
                <PageTop pagetitle="Give Feedback" />
                <Feedback/>
                <Footer/>
            </Fragment>
        );
    }
}

export default FeedbackPage;
