import React, { Component } from 'react';
import Service from './Service';

class ListUserTypes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            user_id: '',
            fname:'',
            lname:'',
            contact_no:'',
            email:'',
            address: '',
            gender: '',
            user_type: this.props.match.params.user_id,
            worker_type:'',
            client_type:'',
            password:''
        }
     
        this.changeuser_typeHandler = this.changeuser_typeHandler.bind(this);
     
    }
  
    componentDidMount(){
            Service.getbyusertype(this.state.user_type).then( (res) =>{
                let usertype = res.data;
                this.setState({
                    fname: usertype.fname,
                    lname: usertype.lname,
                    email: usertype.email,
                    contact_no: usertype.contact_no,
                    address: usertype.address,
                    user_type: usertype.user_type,
                    gender:usertype.gender,
                    password:usertype.password,
                    worker_type:usertype.worker_type,
                    client_type:usertype.client_type
                });
          })
        
    }

    changeuser_typeHandler= (event) => {
        this.setState({user_type: event.target.value});
    }

      render() {
        return (
                <div>
                Select User : 
                <select name="user" value={this.state.user_type} onChange={this.changeuser_typeHandler}>
                    {
                        this.state.usertype.map(user=>{
                           return( <option value={user.user_type}>{user.user_type}</option>)
                        })
                    }
                </select>

                <p>{this.state.user_id}</p>
            </div>

               );   
    }
}

export default ListUserTypes ;
