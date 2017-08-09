import React from "react";

export default class UserPosts extends React.Component{

    renderPost( {user, text, created}, index ){
        return (<li key={ index } className="twit">
            <a href="">
                <img className="avatar" src={user.profile_background_image_url} alt={user.name}/>
                <span className=" twit-head-el fullname">{user.name}</span>
                <span className="twit-head-el user-badge">{`@${user.screen_name}`}</span>
            </a>
            <span className="twit-head-el time">{created.split(" +", 1)}</span>
            <p className="post">{text}</p>

        </li>)
    }

    render() {
        if(!this.props.posts) {
            return (
                <div>Can't find any posts...</div>
            );
        }

        return (<article>
                    <ul>
                        {
                            this.props.posts.map(this.renderPost)
                        }
                    </ul>
                </article>)
            }
}
