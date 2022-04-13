import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row,FormGroup } from 'reactstrap';

const REQ_STATUS=["Declined"]

    class PlaceRequirement extends Component{

  
      constructor(props){
          super(props);
        this.state = {
           }
  
      }       
  
      cancel=()=>{
      
          this.props.history.push('/clienthome/:userid');
      }
  
      reset=()=>{
          this.props.history.push('/placerequirement');
      }
  
  
      onSubmit=(event)=> {
        
        let req_date = this.refs.req_date.value;
        let no_of_workers = this.refs.no_of_workers.value;
        let work_days = this.refs.work_days.value;
        let address = this.refs.address.value;
        let req_status =  REQ_STATUS;
        let client_id = localStorage.getItem("client_id")
  
        
  
        const url= "http://localhost:8080/empdetails/details?req_date="+req_date+
                                                          "&no_of_workers=" + no_of_workers+
                                                          "&work_days="+work_days+
                                                          "&address="+address+
                                                          "&req_status="+req_status+
                                                          "&client_id="+client_id; 
         alert("Your Requirement has been placed !!")                                
         fetch(url)
        .then (response => response.text())
        this.props.history.push("/clienthome/:userid");
    }
  
      render() {
                
                 
          return (
   
              <div className="app flex-row align-items-center"><br/><br/><br/><br/>
     
                <Container>
        
                  <Row className="justify-content-center">
        
                    <Col md="9" lg="7" xl="6">
        
                      <Card className="mx-4">
     
                        <CardBody className="p-4">
      
                          <Form>
        
                            <div class="row" className="mb-2 pageheading">
  
                            <h2>Enter Requirements :</h2>
                            </div>
      
                            <InputGroup className="mb-3">
                            <input type="date" name="req_date"  placeholder="Request Date" ref="req_date" />
                             </InputGroup>
                                                                                                       
                            <InputGroup className="mb-3">
                            <input type="number" name="no_of_workers"  placeholder="No of Workers" ref="no_of_workers"/>
                             </InputGroup>
                          
                            <InputGroup className="mb-3">
                            <input type="number" name="work_days" placeholder="Work Days" ref="work_days"/>
                            </InputGroup>
     
                            <InputGroup className="mb-3">
                            <input type="text" name="address" placeholder="Address" ref="address"/>
                            </InputGroup>
  
                          <Button  onClick={(event) => {this.onSubmit(event)}}  color="success" >Submit</Button>
                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                          <button className="btn btn-primary" onClick={this.reset.bind(this)} style={{marginLeft: "10px"}}>Reset</button>
                         </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          }
        }
    export default PlaceRequirement;