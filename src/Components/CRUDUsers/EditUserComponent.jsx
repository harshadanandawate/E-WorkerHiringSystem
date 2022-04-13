import React, { Component } from 'react'
import Service from "./Service";
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row,FormGroup } from 'reactstrap';

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            user_id:'',
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
        }
        this.updateUser = this.updateUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        
        this.loadUser();
    }

    loadUser() {
       
        Service.fetchUserById(window.localStorage.getItem("user_id")).then((res) => {
                let user = res.data;
                this.setState({ user_id:user.user_id,
                                fname: user.fname,
                                lname: user.lname,
                                contact_no: user.contact_no,
                                email: user.email,
                                address:user.address,
                                gender: user.gender,
                                user_type: user.user_type,
                                worker_type: user.worker_type,
                                client_type:user.client_type,
                                password:user.password})
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    updateUser = (e) => {
        e.preventDefault();
        let user = {
                    user_id: this.state.user_id,
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
        alert(user.fname);
        
        Service.editUser(user)
            .then(res => {
                this.setState({message : 'User edited successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
         
   <div className="app flex-row align-items-center">
               
            <Container>
    
              <Row className="justify-content-center">
    
                <Col md="9" lg="7" xl="6">
    
                  <Card className="mx-4">
 
                    <CardBody className="p-4">
  
                      <Form>
    
                        <div class="row" className="mb-2 pageheading">

                            <h2>Update</h2>
                        </div>
  
                        <lable>First Name</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="text" name="fname" className="form-control" readonly="true" value={this.state.fname} onChange={this.onChange} />
                         </InputGroup>
                                                                                                   
                        
                        <lable>Last Name</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="text" name="lname" value={this.state.lname} onChange={this.onChange}/>
                         </InputGroup>
                        
                        <lable>Contact</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="text" name="contact_no" value={this.state.contact_no} onChange={this.onChange}/>
                        </InputGroup>
 
                        <lable>Email</lable><br></br>
                        <InputGroup className="mb-3">
                        <Input type="email" name="email" value={this.state.email} onChange={this.onChange} />
                        </InputGroup>
 
                        
                        <lable>Address</lable><br></br>
                        <InputGroup className="mb-3">
                          <Input type="text" name="address" value={this.state.address} onChange={this.onChange}/>
                        </InputGroup>

                       <lable>Password</lable><br></br>
                        <InputGroup className="mb-3">
                       <Input type="password" name="password" value={this.state.password} onChange={this.onChange} />
    
                        </InputGroup>

                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                      
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

export default EditUserComponent;
