import React, { Component } from 'react'
import Service from './Service'

class UserCRUDComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser(user_id){
        Service.deleteUser(user_id).then( res => {
            this.setState({Users: this.state.users.filter(User => User.user_id !== user_id)});
        });
    }
    viewUser(user_id){
        this.props.history.push(`/view-user/${user_id}`);
    }
    editUser(user_id){
        this.props.history.push(`/add-user/${user_id}`);
    }

    componentDidMount(){
        Service.deleteuser().then((res) => {
            this.setState({ users: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Contact No</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.user_id}>
                                             <td> {user.fname}</td>   
                                             <td> {user.lname}</td>
                                             <td> {user.email}</td>
                                             <td> {user.contact}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user.user_id)} className="btn btn-info"> Update </button>
                                                 <input placeholder="user_id" >UserID</input>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteuser(user.user_id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.user_id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>

            </div>
        )
    }
}

export default UserCRUDComponent;