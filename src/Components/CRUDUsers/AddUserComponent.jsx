import React, { Component } from 'react'
import Service from "./Service";
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row,FormGroup } from 'reactstrap';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            fname:'',
            lname:'',
            contact_no:'',
            email:'',
            address: '',
            gender: '',
            user_type:'',
            worker_type:'',
            client_type:'',
            password:'',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
        
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
                    fname: this.state.fname, 
                    lname: this.state.lname, 
                    contact_no: this.state.contact_no, 
                    email: this.state.email, 
                    address:this.state.address,
                    gender: this.state.gender, 
                    user_type: this.state.user_type, 
                    worker_type: this.state.worker_type, 
                    client_type: this.state.client_type, 
                    password:this.state.password,
                };
             
             
             
             Service.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    cancel=()=>{
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="app flex-row align-items-center">
               
            <Container>
    
              <Row className="justify-content-center">
    
                <Col md="9" lg="7" xl="6">
    
                  <Card className="mx-8">
 
                    <CardBody className="p-8">
  
                      <Form>
    
                        <div class="row" className="mb-6 pageheading">

                        <h2>Add User</h2>
                        </div>
  
                        <lable>First Name</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="text" name="fname" value={this.state.fname} onChange={this.onChange}/>
                         </InputGroup>
                                                                                                   
                        
                        <lable>Last Name</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="text" name="lname" value={this.state.lname} onChange={this.onChange} />
                         </InputGroup>
                        
                        <lable>Contact</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="text" name="contact_no" value={this.state.contact_no} onChange={this.onChange} />
                        </InputGroup>
 
                        
                        <lable>Email</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="email" name="email" value={this.email} onChange={this.onChange}  />
                        </InputGroup>
 
                        
                        <lable>Address</lable><br></br>
                        <InputGroup className="mb-3">
                          <Input type="text" name="address" value={this.address} onChange={this.onChange} />
                        </InputGroup>
                         
                          <lable>Gender</lable><br></br>
                        <InputGroup className="mb-3" name="gender" value={this.state.gender} onChange={this.onChange}> 
                        <input type="radio" value="Male" name="gender" /> Male
                        <input type="radio" value="Female" name="gender" /> Female
                        <input type="radio" value="Other" name="gender" /> Other<br/>
                        </InputGroup>

                        <lable>User Type</lable><br></br>
                        <InputGroup className="mb-3" name="user_type" value={this.state.user_type} onChange={this.onChange}> 
                        <input type="radio" value="worker" name="user_type" /> Worker
                        <input type="radio" value="client" name="user_type" /> Client<br/>
                        </InputGroup>

                        <lable>Worker Type</lable><br></br>
                        <InputGroup className="mb-3" name="worker_type" value={this.state.worker_type} onChange={this.onChange}> 
                        <input type="radio" value="skilled" name="worker_type" /> skilled
                        <input type="radio" value="unskilled" name="worker_type" /> unskilled<br/>
                        </InputGroup>
                       

                        <lable>Client Type</lable><br></br>
                        <InputGroup className="mb-3" name="client_type" value={this.state.client_type} onChange={this.onChange}> 
                        <input type="radio" value="contractor" name="client_type" /> contractor
                        <input type="radio" value="other" name="client_type" /> other<br/>
                        </InputGroup>
                       
                      
                       <lable>Password</lable><br></br>
                        <InputGroup className="mb-3">
                       <Input type="password" name="password" value={this.state.password} onChange={this.onChange} />
    
                        </InputGroup>


                        <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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

export default AddUserComponent;

