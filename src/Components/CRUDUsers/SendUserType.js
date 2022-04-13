
import React, { Component } from 'react';
import Service from './Service';
import './ListUserComponents.css';
import {InputGroup,Button,FormGroup,Label,Input} from 'reactstrap';

class ListUsers extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[],
        }
        this.reloadUserList = this.reloadUserList.bind(this);
    }
    componentDidMount(){
        this.reloadUserList()
     } 
     
      
    reloadUserList(){

    }

    sendUserType(user_type){
        alert(user_type);
        window.localStorage.setItem("user_type", user_type);
        this.props.history.push('/viewworkers');
    }
    
    render() {
        return (
   
    <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <h2>Select Type of User :</h2><br/><br/>
      
    <FormGroup check>
          <Label check>
            <Input type="radio" name="user_type" value="worker" onClick={() => this.sendUserType("worker")}/>{' '}
            <h4>Worker</h4>
          </Label>
        </FormGroup><br/>   
        <FormGroup check>
          <Label check>
            <Input type="radio" name="user_type" value="client" onClick={() => this.sendUserType("client")}/>{' '}
            <h4>Client</h4>
          </Label>
    </FormGroup>
    </div>
           
        );
        
    }
}

export default ListUsers;