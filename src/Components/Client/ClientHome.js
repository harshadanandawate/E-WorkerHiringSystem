import React from "react";
import {Button,Jumbotron} from 'reactstrap';
import {Link,Route,Redirect} from 'react-router-dom';
import PlaceRequirement from './PlaceRequirement';
import ViewStatus from './ViewStatus';
import './Client.css'
import Wages from './WageListing';
import E from '../Images/E.jpg';
import EditCProfile from './EditCProfile';
import PaymentHome from './PaymentHome';

class ClientHome extends React.Component{
  constructor(props){
      super(props)      
      const tk = localStorage.getItem("tk")
      let loggedInClient = true
      if(tk == null){
          loggedInClient = false
      }
      this.state={
          loggedInClient
      }
  }
  componentDidMount(){
    let cid=localStorage.getItem("client_id");
  }


  render(){
    if(this.state.loggedInClient==false){
      return <Redirect to="/login"/>
  }
      return(
          <div style={{backgroundImage : `url(${E})`,height:'595px' , backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
          <Jumbotron className="client-jumb">
            <h5 className="display-4"> Welcome Client !! </h5>
            <hr className="my-2" />
            <h6 className="lead"><br/>
              <h4>Always at Your Service!!</h4><br/>      
            </h6>
             <nav>
                    <Link to="/viewwages"><Button color="info">View Wages</Button>{' '}</Link>
                    <Link to="/placerequirement"><Button color="primary">Place Requirement</Button>{' '}</Link>
                    <Link to="/viewstatus"><Button color="success">View Status</Button>{' '}</Link>
                    <Link to="/edit-client"><Button color="secondary">Edit Profile</Button>{' '}</Link>
                    <Link to="/paymenthome"><Button color="pink">Payment</Button>{' '}</Link><br/>   
              </nav>
                    <Route path="/placerequirement" component={PlaceRequirement}/>
                    <Route path="/viewstatus" component={ViewStatus}/>
                    <Route path="/viewwages" component={Wages}/>
                    <Route path="/edit-client" component={EditCProfile}/>
                    <Route path="/paymenthome" component={PaymentHome}/>
            <p></p>
            
          </Jumbotron>
          <div align="right">
          <nav>
          <Link to="/logoutclient"><Button color="danger">Logout</Button>{' '}</Link>
         </nav>
         </div>
        </div>
      )
  }
}
export default ClientHome;