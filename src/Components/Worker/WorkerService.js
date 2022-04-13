import axios from 'axios';


const DISPLAY_REQUEST = "http://localhost:8080/worker/empdetails";
const UPDATE_EMP_DETAILS_STATUS = "http://localhost:8080/worker/updatestatus?emp_id=";
const UPDATE_USER="http://localhost:8080/user/update";
const USER_GETONE="http://localhost:8080/user/getone?user_id=";
//const DISPLAY_LIST_USER_TYPES="http://localhost:8080/getbyusertype?user_type=";
//const DELETE_USER="http://localhost:8080/user/delete/";
//const UPDATE_USER="http://localhost:8080/user/update";
//const USER_GETONE="http://localhost:8080/user/getone?user_id=";
//const DISPLAY_CLIENT="http://localhost:8080/client/allclients";
//const ADD_USER="http://localhost:8080/user/save";


class WorkerService {

    getrequests(){
        return axios.get(DISPLAY_REQUEST);
    }

    
    updateempdetailsstatus(emp_id){
        return axios.get(UPDATE_EMP_DETAILS_STATUS + emp_id);

    }

    fetchUserById(client_id){
        return axios.get( USER_GETONE + client_id);
    }

        
    editUser(user) {
        return axios.post(UPDATE_USER , user);
    }

   /* fetchUserById(user_id){
        return axios.get( USER_GETONE + user_id);
    }

    getbyusertype(user_type){
        return axios.get(DISPLAY_LIST_USER_TYPES+ user_type);
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
 */
   

}

export default new WorkerService();