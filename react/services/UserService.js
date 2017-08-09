let $ = require("jquery");

class UserService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/users/";
    }

    getAllUsers(){
        return fetch("../../twitter.json")
            .then(response => response.json())

        //return $.get(this.url);
    }

    getUser(id){
        //return $.get(this.url + 2)
        return fetch("../../twitter.json")
           .then(response => response.json())
            .then(users => {
                return users.find(user => {
                    if (user.id == id)
                        return user;
                });

            })
    }

}

module.exports = new UserService();
