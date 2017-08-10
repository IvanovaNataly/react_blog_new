import React from "react";
import Users from "./users/Users";
import About from "./about/About";
import Phone from "./phone/Phone";
import Navigation from "./header/Navigation";
import {Route} from "react-router";

export default class Social extends React.Component{
    render(){
        return (
            <div>
                <Navigation/>
                <Route exact path="/" component={About}/>
                <Route path="/users" component={Users}/>
                <Route path='/contacts' component={() => window.location = 'http://netcraft.co.il/contact.html'}/>
                <Route exact path="/phone" component={Phone}/>
            </div>
        )
    }
}
