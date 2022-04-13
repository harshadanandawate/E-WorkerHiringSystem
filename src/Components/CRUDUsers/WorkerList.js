import React, { Component } from 'react';
import Service from './Service';
import {InputGroup,Button} from 'reactstrap';

class workerList extends Component {

    constructor(props){
        super(props)
        var id;
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        alert(window.localStorage.getItem("user_type"));
        Service.getbyusertype(window.localStorage.getItem("user_type")).then((res) => {
            this.setState({users: res.data});
        })
    }
    render() {
        return (
                <div>
                <div>
                <h5 align="right"><a href="http://localhost:3000/adminhome">Jump to Home</a></h5>                 
                <h2 className="text-center">UserDetails</h2>
                <div className="row">
                    <table className = "table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th><h6>UserID</h6></th>
                                <th><h6>First Name</h6></th>
                                <th><h6>Last Name</h6></th>
                                <th><h6>Contact No</h6></th>
                                <th><h6>Email</h6></th>
                                <th><h6>User Type</h6></th>
                                <th><h6>Gender</h6></th>
                                <th><h6>Address</h6></th>
                                <th><h6>Password</h6></th>
                            </tr>
                        </thead>  
                        <tbody>
                            {
                                
                      this.state.users.map(
                        users =>
                        <tr key = {users.user_id}>
                                    <td>{users.user_id}</td>
                                    <td>{users.fname}</td>
                                    <td>{users.lname}</td>
                                    <td>{users.contact_no}</td>
                                    <td>{users.email}</td>
                                    <td>{users.user_type}</td> 
                                    <td>{users.gender}</td> 
                                    <td>{users.address}</td> 
                                    <td>{users.password}</td> 
                                    </tr>
                            )
                        }
                        </tbody>
                        </table>      
                </div>
                </div>
            </div>   
        );
        
    }
}

export default workerList;