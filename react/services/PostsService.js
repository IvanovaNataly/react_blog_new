let $ = require("jquery");

class PostsService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts/?userId=";
    }

    getPosts(userId){
        //return $.get(this.url + userId);

        return fetch("../../twits.json")
            .then(response => response.json())
            .then(posts => {
                return posts.filter(post => {
                    if (post.user.id == userId)
                        return post;
                });
            })
    }

}

module.exports = new PostsService();
