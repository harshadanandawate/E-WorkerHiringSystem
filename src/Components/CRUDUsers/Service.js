import axios from 'axios';

const ADD_USER="http://localhost:8080/user/save"
const DISPLAY_USERS = "http://localhost:8080/user/all";
const DISPLAY_LIST_USER_TYPES="http://localhost:8080/user/getbyusertype?user_type=";
const DELETE_USER="http://localhost:8080/user/delete/";
const UPDATE_USER="http://localhost:8080/user/update";
const USER_GETONE="http://localhost:8080/user/getone?user_id=";
/*const DISPLAY_CLIENT="http://localhost:8080/client/allclients";*/


class UserService {

    getallusers(){
        return axios.get(DISPLAY_USERS);
    }

    fetchUserById(user_id){
        return axios.get( USER_GETONE + user_id);
    }

    getbyusertype(user_type){

        return axios.get(DISPLAY_LIST_USER_TYPES + user_type);
    }

    addUser(user) {

        return axios.post(ADD_USER, user);
    }

    deleteUser(user_id){

        return axios.delete(DELETE_USER + user_id);
    }
    
    editUser(user) {
        return axios.post(UPDATE_USER , user);
    }

   /*getclients() {
        return axios.get(DISPLAY_CLIENT);
    }*/
}

export default new UserService();