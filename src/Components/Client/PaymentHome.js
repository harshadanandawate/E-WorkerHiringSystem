import React from "react";
import {Button,Jumbotron} from 'reactstrap';
import {Link,Route,Redirect} from 'react-router-dom';
import E from '../Images/E.jpg';

class PaymentHome extends React.Component{

   render(){
        return(
            <div style={{backgroundImage : `url(${E})`,height:'595px' , backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
    
          <Jumbotron className="client-jumb">
          <h4 align="right"><a href="http://localhost:3000/clienthome/:userid"><b>Back to Client Home</b></a></h4>
            <h5 className="display-4"> Welcome Client !! </h5>
            <hr className="my-2" />
            <h6 className="lead"><br/>
              <h4>Always at Your Service!!</h4><br/>      
            </h6>
             <nav>
                    <Link to="/makepayment"><Button color="info">Make Payment</Button>{' '}</Link>
                    <Link to="/paymentdetails"><Button color="success">Payemt Details</Button>{' '}</Link>
              </nav>
            <p></p>
            
          </Jumbotron>
        </div>
        )
    }
  

  
}

export default PaymentHome