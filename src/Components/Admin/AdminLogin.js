{/*
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Redirect } from 'react-router-dom'
import C from '../Images/C.jpg'

class AdminLogin extends React.Component{
    constructor(props)
    {
      super(props)
      
      const token = localStorage.getItem("token")
      let loggedIn = true

      if(token == null){
          loggedIn = false
      }
      
       
        this.state = {
            msg:"",
            loginerror : "",
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.checklogin = this.checklogin.bind(this)
    }

    onChange(e){
      this.setState({
        [e.target.name]:e.target.value
      })
    }
        
    checklogin= (e) =>{

        e.preventDefault()
        const{uid,password }=this.state
        const url= "http://localhost:8080/admin/checklogin?admin_id="+uid+"&password="+password;
        fetch(url)
        .then (response => response.text())
        .then (data => {
          localStorage.setItem("token","abc")
          this.setState({
            loggedIn:true
          })
           this.props.history.push("/adminhome");  
        });

    }

    render(){
      if(this.state.loggedIn){
        return <Redirect to="adminhome"/>
      }
        return(
          <div style={{backgroundImage : `url(${C})`,height:'595px' , backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>

        <div style={{margin:"center"}}>
            <MDBContainer style={{margin:"center"}}>
              <MDBRow>
                <MDBCol md="12">
                  <form  margin-top="50px">
                    <p className="h2 text-center mb-4">Login</p>
                    <div className="grey-text">
                    <input type="text" className="form-control" name="uid" placeholder="Enter Admin" value={this.state.uid} onChange={this.onChange} ref="admin_id" /><br/>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}  ref="password" /><br/>
                    </div>
                    <div className="text-center">
                      <input type="button" className="btn btn-primary btn-lg btn-block" onClick={this.checklogin} value="Login"/>
                      <br/>
                    <p>{this.state.loginerror}</p>
                    <p>{this.state.msg}</p>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
        </div>
        </div>
);
}
}

export default AdminLogin;
*/}