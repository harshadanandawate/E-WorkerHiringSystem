import React from 'react';
import {Button,Jumbotron} from 'reactstrap';
import {Link,Route,Redirect} from 'react-router-dom';
import ViewRequest from './ViewRequest';
import E from '../Images/E.jpg'
import EditLProfile from './EditLProfile';

class WorkerHome extends React.Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
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
            return <Redirect to="/login"/>
        }
        return(
        <div style={{backgroundImage : `url(${E})`,height:'610px' , backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
      <Jumbotron>
        <h5 className="display-4"> Welcome Worker ! </h5>
        <hr className="my-2" />
        <h6 className="lead"><br/>
        <h4> We assure best employements for you !!</h4><br/>

        <nav>
                     <Link to="/viewrequest"><Button color="info">View Requests</Button>{' '}</Link>
                     <Link to="/edit-worker"><Button color="success">Edit Profile</Button>{' '}</Link><br/>
        </nav>
                      <Route path="/viewrequest" component={ViewRequest}/>
                      <Route path="/edit-worker" component={EditLProfile}/>
        </h6>
      </Jumbotron>

      <div align="right">
      <nav>
            <Link to="/logoutworker"><Button color="danger">Logout</Button>{' '}</Link>
    </nav>
    </div>
    </div>

        )
    }
}

export default WorkerHome;