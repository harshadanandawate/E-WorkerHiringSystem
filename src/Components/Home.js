import React,{useState} from 'react';
import Back from "./Images/Back.jpg";
import workers from './Images/Workers.png';
import '../App.css'
import { Jumbotron, Container,Button,Collapse,Card,CardBody } from 'reactstrap';

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return ( 
            <div style={{backgroundImage : `url(${Back})`,height:'595px' , backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
           
            <Jumbotron fluid style={{backgroundImage : `url(${workers})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
                <Container fluid>
                <h1 className="display-3" >e-Worker Hiring</h1>
                <p className="lead">We provide worker hiring solutions !</p>

            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>About us</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                It is very difficult for daily wagers to search the job once they finish the job in their hand. 
                The main objective of this project is to build the system to get such skilled worker and employers on one platform. 
                worker and employers can upload the information about themselves. 
                Employers can post their requirement details on portal. 
                worker get a chance to quickly react to new request and have employment. 
                Both are getting benefitted by finding required worker and required jobs.
                </CardBody>
                </Card>
            </Collapse>
            </Container>
            </Jumbotron>
            {/*<HomeCarousel/>*/}
           </div>
    );
  }

export default Home;