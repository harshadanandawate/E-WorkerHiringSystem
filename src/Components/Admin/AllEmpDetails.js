import React, { Component } from 'react';
import AdminService from './AdminService';

class AllEmpDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            empdetails:[],
        }
        this.reloadEmpList = this.reloadEmpList.bind(this);
    }
    componentDidMount(){
        this.reloadEmpList()
     } 
     
     reloadEmpList() {
        AdminService.getallempdetails()
            .then((res) => {
                this.setState({empdetails: res.data})
            });
    }    
    
    render() {
        return (
                <div>
                <div>
                <h4 align="right"><a href="http://localhost:3000/adminhome">Jump to Home</a></h4>
                <h2 className="text-center">Employement Details</h2>
                <div className="row">
                    <table className = "table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th><h6>Employement ID</h6></th>
                                <th><h6>Request Date</h6></th>
                                <th><h6>Request Status</h6></th>
                                <th><h6>Work Days</h6></th>
                                <th><h6>Number of Workers</h6></th>
                                <th><h6>Address</h6></th>
                            </tr>
                        </thead>  
                        <tbody>
                            {
                                
                      this.state.empdetails.map(
                        empdetails =>
                        <tr key ={empdetails.emp_id}>
                                    <td>{empdetails.emp_id}</td>
                                    <td>{empdetails.req_date}</td>
                                    <td>{empdetails.req_status}</td>
                                    <td>{empdetails.work_days}</td>
                                    <td>{empdetails.no_of_workers}</td>
                                    <td>{empdetails.address}</td>     
                                    </tr>
                            )
                        }
                        </tbody>
                        </table>      
                </div>
                </div>
            </div>   
        );
        
    }
}

export default AllEmpDetails;