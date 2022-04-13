import axios from 'axios';


const DISPLAY_USERS = "http://localhost:8080/user/all";
const DELETE_USER= "http://localhost:8080/user/delete/?user_id=";
//const ADD_USER="http://localhost:8080/user";
//const DISPLAY_LIST_USER_TYPES = "http://localhost:8080/getbyusertype?user_type=";

class Service {

    getallusers() {
        return axios.get(DISPLAY_USERS);
    }

    deleteuser(userId) {
        return axios.delete(DELETE_USER + userId);
    }

    /*fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
*/
}

export default new Service();