import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Report from "../components/Report/Report";
import Footer from "../components/Footer/Footer";

class ReportPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Report"/>
                <PageTop pagetitle="Report Here" />
                <Report/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ReportPage;
