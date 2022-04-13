import axios from 'axios';

const DISPLAY_EMP_DETAILS="http://localhost:8080/empdetails/alldetails";

class AdminService {

    getallempdetails(){
        return axios.get(DISPLAY_EMP_DETAILS);
    }

}

export default new AdminService();