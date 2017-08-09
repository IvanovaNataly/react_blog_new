import React from "react";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {logOut} from "../../actions/creators";
import LoginService from "../../services/LoginService";
import Moment from 'react-moment';
import moment  from 'moment';

import "./navigation.scss";

class Navigation extends React.Component {

    render(){
        return (

            <header className="navigation">
                <div className="logo"/>
                <nav className=""></nav>
                    <NavLink to="/users" activeClassName="active">Home</NavLink>
                    <NavLink exact to="/" activeClassName="active">About</NavLink>
                    <NavLink to="/contacts" activeClassName="active">Contact Us</NavLink>
                    <NavLink to="/phone" activeClassName="active">Phone Number</NavLink>
                </header>);
    }
}

function mapStateToProps(state){
    return {
        user: state.loggedInUser
    }
}

function mapsDispatchToProps(dispatch){
    return {
        logout: ()=> dispatch( logOut() )
    }
}

let connected = connect(mapStateToProps, mapsDispatchToProps)(Navigation);

export default withRouter(connected);
