import React from "react";

export default class UserDetails extends React.Component {
    render(){
        if(!this.props.user)
            return <article>No User selected</article>;

        return (<article>
                    <h1 className="page-header">{ this.props.user.name }</h1>

                </article>)
    }
}
