import React, {Component,Fragment} from 'react';
import {Route,Switch} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import QuizPage from "../pages/QuizPage";
import SignPage from "../pages/SignPage";
import RegistationPage from "../pages/RegistationPage";
import LoginPage from "../pages/LoginPage";
import WLoginPage from "../pages/WLoginPage";
import FeedbackPage from "../pages/FeedbackPage";
import ReportPage from "../pages/ReportPage";
import SelectQuizPage from "../pages/SelectQuizPage";



class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/Refund" component={RefundPage}/>
                    <Route exact path="/Terms" component={TermsPage}/>
                    <Route exact path="/Privacy" component={PrivacyPage}/>
                    <Route exact path="/ProjectDetails/:projectID/:projectName" component={ProjectDetailsPage}/>
                    <Route exact path="/CourseDetails/:CourseID" component={CourseDetailsPage}/>
                    <Route exact path="/quiz" component={QuizPage}/>
                    <Route exact path="/Sign" component={SignPage}/>
                    <Route exact path="/Registation" component={RegistationPage}/>
                    <Route exact path="/Login" component={LoginPage}/>
                    <Route exact path="/WLogin" component={WLoginPage}/>
                    <Route exact path="/Feedback" component={FeedbackPage}/>
                    <Route exact path="/Report" component={ReportPage}/>
                    <Route exact path="/Select" component={SelectQuizPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;