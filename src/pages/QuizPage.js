import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Quiz from "../components/Quiz/QuizMain";


class QuizPage extends Component {
    render() {
        return (
            <div>
                <TopNavigation title="About"/>
                <PageTop pagetitle="Quiz"/>
                <Quiz/>
            </div>
        );
    }
}

export default QuizPage;