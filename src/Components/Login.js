import React from 'react';
import {Redirect} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import C from './Images/C.jpg'
import ClientService from './Client/ClientService';

class Login extends React.Component{
  constructor(props)
  {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token == null){
        loggedIn = false
    }

    const tk = localStorage.getItem("tk")
    let loggedInClient = true
    if(tk == null){
        loggedInClient = false
    }

    const tkadmin = localStorage.getItem("tkadmin")
    let loggedInAdmin = true
    if(token == null){
        loggedInAdmin = false
    }

      this.state = {
          msg:"",
          loginerror : "",
          loggedIn,
          loggedInClient,
          loggedInAdmin
      }
      this.onChange = this.onChange.bind(this)
  }
      
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
      
  checkLogin= (e) =>{
      e.preventDefault()
      const{email,password }=this.state
      const url= "http://localhost:8080/user/checkLogin?email="+email+"&password="+password;
      fetch(url)
      .then (response => response.text())
      .then (data => {
          if(data == "worker")
          {
             localStorage.setItem("token","lab")
             this.setState({
              loggedIn:true
            })
              ClientService.getUserId(email).then((resp) => {
              localStorage.setItem("userw_id",resp.data);
              //let userw_id=localStorage.getItem("userw_id");
              localStorage.setItem("worker_id",localStorage.getItem("userw_id"));
              this.props.history.push("/workerhome/"+localStorage.getItem("userw_id"));
          });
              
          }
          else if(data =="client")
          {  
            localStorage.setItem("tk","cli")
            this.setState({
             loggedInClient:true
           })
              ClientService.getUserId(email).then((resp) => {
              localStorage.setItem("userc_id",resp.data);
              //let userc_id=localStorage.getItem("userc_id");
              //console.log(userc_id);
              localStorage.setItem("client_id",localStorage.getItem("userc_id"));
              this.props.history.push("/clienthome/"+localStorage.getItem("userc_id"));
        });
              
          }
          else if(data =="admin")
          {  
            localStorage.setItem("tkadmin","ad")
            this.setState({
             loggedInAdmin:true
           })
              this.props.history.push("/adminhome"); 
          }
          else if(data =="")
          {
              this.setState({loginerror:"Wrong ID/PWD"})
          }
      });
  }

  
  render(){
    
    if(this.state.loggedIn){
      return <Redirect to="/workerhome/:user_id"/>
    }
    else if(this.state.loggedInClient){
      return <Redirect to="/clienthome/:user_id"/>
    }
    else if(this.state.loggedInAdmin){
      return <Redirect to="adminhome"/>
    }

      return(
        <div style={{backgroundImage : `url(${C})`,height:'610px' , backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}> 
      <div style={{margin:"center"}}>
          <MDBContainer style={{margin:"center"}}>
            <MDBRow>
              <MDBCol md="12">
                <form  margin-top="50px">
                  <p className="h2 text-center mb-4">Login</p>
                  <div className="grey-text">
                  <input type="text" className="form-control" name="email" placeholder="Enter Email ID" value={this.state.email} onChange={this.onChange} ref="email" /><br/>
                  <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} ref="password" /><br/>
                  </div>
                  <div className="text-center">
                    <input type="button" className="btn btn-primary btn-lg btn-block" onClick={this.checkLogin} value="Login"/>
                    <br/>
                  <p style={{color:'red',backgroundColor:'darkgrey'}} className="h2">{this.state.loginerror}</p>
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
export default Login;