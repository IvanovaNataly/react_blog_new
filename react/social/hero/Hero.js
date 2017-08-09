
import React from "react";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {logOut} from "../../actions/creators";
import LoginService from "../../services/LoginService";
import Moment from 'react-moment';
import moment  from 'moment';

import "./hero.scss";

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  filter: "",
                        filteredData: []}
    }
    //
    // componentWillMount() {
    //     fetch("../../twitter.json")
    //         .then((response) => {return response.json()})
    //         .then((data) => { console.log(data); this.setState({data: data,
    //             filteredData: data}) })
    // }
    //


    // setUserChosen(chosenId) {
    //     let chosenUser = this.state.data.find( function(element) {
    //         return element.id === chosenId
    //     } )
    //     this.props.updateUser(chosenUser);
    // }

    setUserChosen(e) {
        this.setState( {userChosen: e.target.text,
                        filteredData: []} )
    }

    onUserChosen() {

    }

    renderProfiles(user, i){
        if (this.state.filter) {
            return <li key={i} onClick={this.setUserChosen.bind(this)}>
                 {/*key={i} onClick={this.setUserChosen.bind(this)}>{ user.name }*/}
                <NavLink exact activeClassName="active" to="/users/2" >{ user.name }</NavLink>
            </li>
        }

    }

    setFilter(value) {
        this.setState({ filter: value });

        var filteredNames = this.props.users.filter(function(el){
            let name = el.name.toLowerCase();
            let res = name.indexOf(value.toLowerCase()) === 0;
            return res;
        })
        this.setState({ filteredData: filteredNames });
    }

    render() {
        return(
            <div className="hero">
                <h1 className="hero-header">Welcome to FED test</h1>
                <div className="search-container">
                    <input className="search-input" onChange={ (event) => this.setFilter(event.target.value) } value={this.state.userChosen}></input>
                    <ul className="search-results">
                        {this.state.filteredData.map( this.renderProfiles.bind(this) )}
                    </ul>
                    <div className="btn-container">
                        <button className="btn" onClick={this.onUserChosen.bind(this)}>Show</button>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.friends.usersList,
        isLoading: state.friends.isLoading
    }
}

export default connect(mapStateToProps, null)(Hero);