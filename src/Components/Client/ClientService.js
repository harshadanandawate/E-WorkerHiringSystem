import axios from 'axios';

const DISPLAY_ACCEPTED_REQ = "http://localhost:8080/client/getbystatus?client_id=";
const USER_GETONE="http://localhost:8080/user/getone?user_id=";
const DELETE_USER="http://localhost:8080/user/delete/";
const UPDATE_USER="http://localhost:8080/user/update";
const DISPLAY_USERS = "http://localhost:8080/user/all";
const GET_ID = "http://localhost:8080/user/getId?email=";

class ClientService {

    getbystatus(client_id){
        return axios.get(DISPLAY_ACCEPTED_REQ + client_id );
    }

    fetchUserById(client_id){
        return axios.get( USER_GETONE + client_id);
    }

    deleteUser(client_id){

        return axios.delete(DELETE_USER + client_id);
    }
    
    editUser(user) {
        return axios.post(UPDATE_USER , user);
    }

    getallusers(){
        return axios.get(DISPLAY_USERS);
    }

    getUserId(email){
        return axios.get(GET_ID + email);
    }
}

export default new ClientService();