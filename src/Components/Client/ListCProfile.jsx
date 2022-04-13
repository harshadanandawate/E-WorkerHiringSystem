
import React, { Component } from 'react';
import ClientService from './ClientService';
import {InputGroup,Button} from 'reactstrap';


class ListCProfile extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[],
        }
        this.deleteuser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }
    componentDidMount(){
        this.reloadUserList()
     } 
     
     reloadUserList() {
        ClientService.getallusers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteUser(user_id) {
        alert("User" + user_id + " Successfully Deleted !")
        ClientService.deleteUser(user_id)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.user_id !== user_id)});
           })
    }

    editUser(user_id){
       
        window.localStorage.setItem("user_id", user_id);
        this.props.history.push('/edit-user');
    }

    
    render() {
        return (
                <div>
                <div>
                <p align="right"><a href="http://localhost:3000/clienthome/:userid">Jump to Home</a></p>
                <h2 className="text-center">User Details</h2>
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
                                <th><h6>Actions</h6></th>
                            </tr>
                        </thead>  
                        <tbody>
                            {
                                
                      this.state.users.map(
                        users =>
                        <tr key ={users.user_id}>
                                    <td>{users.user_id}</td>
                                    <td>{users.fname}</td>
                                    <td>{users.lname}</td>
                                    <td>{users.contact_no}</td>
                                    <td>{users.email}</td>
                                    <td>{users.user_type}</td> 
                                    <td>{users.gender}</td> 
                                    <td>{users.address}</td> 
                                    <td>{users.password}</td> 
                                    <td>
                                    <button className="btn btn-success" onClick={() => this.deleteUser(users.user_id)}> Delete</button>
                                    <button className="btn btn-warning" onClick={() => this.editUser(users.user_id)}> Edit</button></td>     
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
export default ListCProfile;