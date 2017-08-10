import React from "react";
import {NavLink} from "react-router-dom";

import "./navigation.scss";

export default class Navigation extends React.Component {

    render(){
        return (

            <header className="navigation">
                <div className="logo"/>
                <nav className=""></nav>
                    <NavLink exact to="/" activeClassName="active">About</NavLink>
                    <NavLink to="/users" activeClassName="active">Home</NavLink>
                    <NavLink to="/contacts" activeClassName="active">Contact Us</NavLink>
                    <NavLink to="/phone" activeClassName="active">Phone Number</NavLink>
                </header>);
    }
}
