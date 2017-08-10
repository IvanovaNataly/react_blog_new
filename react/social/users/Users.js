import React from "react";
import UserPage from "./userPage/UserPage";
import UsersList from "./usersList/UsersList";
import Hero from "../hero/Hero";
import {Route} from "react-router";

import '../../main.scss';

export default class Users extends React.Component {

    render(){
        return (<div>
                    <Hero/>
                    <section className="users-container">
                        <UsersList/>
                        <Route path="/users/:id" component={UserPage}/>
                    </section>
                </div>)
    }
}
