
import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import "./hero.scss";

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  filter: "",
                        filteredData: []}
    }

    setUserChosen(e) {
        this.setState( {userChosen: e.target.textContent,
                        userChosenId: e.target.dataset.id,
                        filteredData: []} );
    }

    onUserChosen() {
        this.setState({userChosen: ""})
    }

    renderProfiles(user, i){
        if (this.state.filter) {
            return <li key={i} onClick={e => this.setUserChosen(e) } data-id={user.id}>
                        <span className="search-item">
                            { user.name }
                        </span>
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
                        <NavLink className="btn" exact to={`/users/${this.state.userChosenId}`} onClick={this.onUserChosen.bind(this)}>Show</NavLink>
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