import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row} from 'reactstrap';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const validContactRegex = RegExp(
  / \+91-[\d]{10}$/
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

 class Register extends React.Component{
     
     constructor(props) {
        super(props);
        this.state = {
                fname:'',
                lname:'',
                contact_no:'',
                email:'',
                address: '',
                gender: '',
                user_id:'',
                user_type:'',
                worker_type:'',
                client_type:'',
                password:'',
                errors: {
                  fname: '',
                  email: '',
                  password: '',
                  lname:'',
                  contact_no:''
                }
                      }
                          this.fname = this.fname.bind(this);
                          this.lname = this.lname.bind(this);
                          this.contact_no = this.contact_no.bind(this);
                          this.email = this.email.bind(this);
                          this.address = this.address.bind(this);
                          this.gender = this.gender.bind(this);
                          this.user_id = this.user_id.bind(this);
                          this.user_type = this.user_type.bind(this);
                          this.worker_type = this.worker_type.bind(this);
                          this.client_type = this.client_type.bind(this);
                          this.password = this.password.bind(this);
      }

                  fname=(event)=> {
             
                    this.setState({ fname: event.target.value })
              
                  }
                  lname=(event)=> {
             
                    this.setState({ lname: event.target.value })
              
                  }
                  contact_no=(event)=> {
             
                    this.setState({ contact_no: event.target.value })
              
                  }
                
                  email=(event)=> {
             
                    this.setState({ email: event.target.value })
              
                  }
          
             
                  address=(event)=> {
           
                    this.setState({ address: event.target.value })
              
                  }
                  gender=(event)=> {
             
                    this.setState({ gender: event.target.value })
            
                  }
                  user_id=(event)=> {
             
                    this.setState({ user_id: event.target.value })
            
                  }

                  user_type=(event)=> {
             
                    this.setState({user_type: event.target.value })
            
                  }

                 worker_type=(event)=> {
             
                    this.setState({worker_type: event.target.value })
            
                  }

                  client_type=(event)=> {
             
                    this.setState({client_type: event.target.value })
            
                  }
                  password=(event)=> {
             
                    this.setState({ password: event.target.value })
            
                  }            
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fname': 
        errors.fname = 
          value.length < 2
            ? 'First Name must be at least 2 characters long!'
            : '';
        break;
      
        case 'lname': 
        errors.lname = 
          value.length < 2
            ? 'Last Name must be at least 2 characters long!'
            : '';
        break;

      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
            break;

       case 'contact_no': 
          errors.contact_no = 
            value.length === 10
              ? ''
              : 'Contact No must be 10 digits long!';
            break;
      
       default:
        break;
    }
    

    this.setState({errors, [name]: value});
  }
                  cancel=()=>{
                    this.props.history.push('/');
                }

                reset=()=>{
                  this.props.history.push('/register');
              }
       

            register=(event)=> {

              event.preventDefault();

              if(validateForm(this.state.errors)) {
                console.info('Valid Form')
              }else{
                console.error('Invalid Form')
              }

              const requestOption={
                method: 'post',
             
                      headers: {
               
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'

              },
              "body": JSON.stringify({
            
                fname:this.state.fname,
                lname:this.state.lname,
                contact_no: this.state.contact_no,
                email: this.state.email,
                address:this.state.address,
                gender:this.state.gender,
                user_id:this.state.user_id,
                user_type:this.state.user_type,
                worker_type:this.state.worker_type,
                client_type:this.state.client_type,
                password:this.state.password,
             })
            };

            //alert(this.state.user_type);
            if(this.state.user_type === "worker")
            {
             
              fetch('http://localhost:8080/worker/saveworker',requestOption)
              .then(res=>{
                if(res.status==200)
                {
                  alert("Your Registration Successful !");
                  //alert("Name : " + this.state.fname +" "+ this.state.lname );
                  //alert("Password : "+this.state.password);
                  
                  this.props.history.push("/login");
                }
                else{
                    alert("OOPS! Registration Failed !");
                }
              })
            }
            else if(this.state.user_type === "client")
            {
              fetch('http://localhost:8080/client/saveclient',requestOption)
              .then(res=>{
                if(res.status==200)
                {
                  alert("Your Registration Successful !");
                  alert("Name : " + this.state.fname +" "+ this.state.lname );
                  alert("Password : "+this.state.password);
                  
                  this.props.history.push("/login");
                }
                else{
                    alert("OOPS! Registration Failed !");
                }
              })
            }
          }

                  render() {
              

                    const {errors} = this.state;


               
                    return (
             
                        <div className="app flex-row align-items-center">
               
                          <Container>
                  
                            <Row className="justify-content-center">
                  
                              <Col md="9" lg="7" xl="6">
                  
                                <Card className="mx-4">
               
                                  <CardBody className="p-4">
                
                                    <Form onSubmit={this.register} noValidate>
                  
                                      <div class="row" className="mb-2 pageheading">

                                          <h2>Registration Form</h2>
                                      </div>
                

                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="text" name="fname" placeholder="First Name" onChange={(event) =>this.fname(event),this.handleChange } noValidate required />
                                      {errors.fname.length > 3 && <span className='error'>{errors.fname}</span>}
                                       </InputGroup>
                                      </div>

                                       <div>                                  
                                      <InputGroup className="mb-3">
                                      <Input type="text" name="lname" placeholder="Last Name" onChange={(event) =>this.lname(event),this.handleChange } noValidate  />
                                      {errors.lname.length > 3 && <span className='error'>{errors.lname}</span>}
                                       </InputGroup>
                                       </div>

                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="number" name="contact_no" placeholder="Contact No" onChange={(event) =>this.contact_no(event) ,this.handleChange } noValidate/>
                                      {errors.contact_no.length > 10 && <span className='error'>{errors.contact_no}</span>}
                                      </InputGroup>
                                      </div>
                                      
                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="email" name="email" placeholder="Email" onChange={(event) =>this.email(event), this.handleChange } noValidate />
                                      {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                                      </InputGroup>
                                      </div>
                                  
                                      <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Address" onChange={(event) =>{this.address(event)}} />
                                      </InputGroup>
                                       
                                        <lable>Gender</lable><br></br>
                                      <InputGroup className="mb-3" onChange={(event) =>{this.gender(event)}}> 
                                      <input type="radio" value="Male" name="gender"/> Male
                                      <input type="radio" value="Female" name="gender" /> Female
                                      <input type="radio" value="Other" name="gender" /> Other<br/>
                                      </InputGroup>

                                      <lable>User Type</lable><br></br>
                                      <InputGroup className="mb-3" onChange={(event) =>{this.user_type(event)}}> 
                                      <input type="radio" value="worker" name="user_type" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"/> Worker
                                      <input type="radio" value="client" name="user_type" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"/> Client<br/>
                                      </InputGroup>

                                      <div class="panel-group" id="accordion">     
                                       <div id="collapseOne" className="panel-collapse collapse in">
                                      <lable>Worker Type</lable><br></br>
                                      <InputGroup className="mb-3" onChange={(event) =>{this.worker_type(event)}}> 
                                      <input type="radio" value="plumber" name="worker_type" /> Plumber
                                      <input type="radio" value="cleaner" name="worker_type" /> cleaner
                                      <input type="radio" value="Construction Workers" name="worker_type" /> Construction Workers<br/>
                                      </InputGroup>
                                      </div>
                                     
                                      <div id="collapseTwo" className="panel-collapse collapse in">
                                      <lable>Client Type</lable><br></br>
                                      <InputGroup className="mb-3" onChange={(event) =>{this.client_type(event)}}> 
                                      <input type="radio" value="contractor" name="client_type" /> contractor
                                      <input type="radio" value="other" name="client_type" /> other<br/>
                                      </InputGroup>
                                      </div>
                                </div>

                                    <div>
                                      <InputGroup className="mb-3">
                                     <Input type="password" name="password" placeholder="Password" onChange={(event) =>this.password(event),this.handleChange} noValidate  />
                                     {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                      </InputGroup>
                                      </div>

                                    <Button  onClick={(event) => {this.register(event)}}  color="success" >Register</Button>
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
                  
                  export default Register;