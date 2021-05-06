import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import SelectQuiz from "../components/SelectQuiz/SelectQuiz";
import Footer from "../components/Footer/Footer";

class SelectQuizPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Quiz"/>
                <PageTop pagetitle="Participate Quiz" />
                <SelectQuiz/>
                <Footer/>
            </Fragment>
        );
    }
}

export default SelectQuizPage;

