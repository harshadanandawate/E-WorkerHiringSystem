import React, { Component } from 'react'
import WorkerService from "./WorkerService";
import { Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

class EditLProfile extends Component {

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
       
        WorkerService.fetchUserById(window.localStorage.getItem("worker_id")).then((res) => {
                let user = res.data;
                this.setState({ user_id:user.user_id,
                                fname: user.fname,
                                lname: user.lname,
                                contact_no: user.contact_no,
                                email: user.email,
                                address:user.address,
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
                    password:this.state.password,
        };
        alert(user.fname);
        
        WorkerService.editUser(user)
            .then(res => {
                this.setState({message : 'User edited successfully.'});
                this.props.history.push('/workerhome/:userid');
            });
    }

    cancel=()=>{
    
        this.props.history.push('/workerhome/:userid');
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
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button><br/><br/><br/>
                      
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

export default EditLProfile;
