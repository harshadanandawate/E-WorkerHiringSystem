import React from 'react';
import {Button,Jumbotron} from 'reactstrap';
import {Link,Route,Redirect} from 'react-router-dom';
import ListUsers from '../CRUDUsers/ListUserComponents';
import Logout from './Logout';
import F from '../Images/F.jpg'
import AllEmpDetails from './AllEmpDetails';

class AdminHome extends React.Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("tkadmin")
        let loggedIn = true

        if(token == null){
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }

    componentDidMount = () => {
        fetch("");
    }

    render(){
        if(this.state.loggedIn==false){
            return <Redirect to="/adminlogin"/>
        }
        return(
                <div style={{backgroundImage : `url(${F})`,height:'595px' , backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed',opacity:"0.9"}}>
      <Jumbotron>
        <h5 className="display-4"> Hi! Admin.. </h5>
        <hr className="my-2" />
        <h6 className="lead">
        </h6>
        <nav>
                <Link to="/users"><Button color="info">View All Users</Button>{' '}</Link>
                <Link to="/getworkers"><Button color="info">View Users By Type</Button>{' '}</Link>
                <Link to="/adminempdetails"><Button color="info">Employement Details</Button>{' '}</Link>
        </nav>
                <Route path="/users" component={ListUsers} />
                <Route path="/getworkers" component={ListUsers} />
                <Route path="/adminempdetails" component={AllEmpDetails} />
      </Jumbotron>

      <span align="right">
      <nav>
      <Link to="/logout"><Button color="danger">Logout</Button>{' '}</Link>
      </nav>
      <Route path="/logout" component={Logout} />
      </span>
      </div>

        )
    }
}

export default AdminHome;