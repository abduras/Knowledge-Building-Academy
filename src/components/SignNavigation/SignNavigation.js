import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";
class SignNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll',navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark' ,navBarTitle:'navTitle',navBarBack:'navBackground',navBarItem:'navItem'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand ><NavLink className={this.state.navBarTitle} to="/"> KB Academy</NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/Registation">REGISTATION</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/Login">LOGIN</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
export default SignNavigation;