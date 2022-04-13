import React, { Component } from 'react';
import WorkerService from './WorkerService';

class ViewRequest extends Component {

    constructor(props){
        super(props)
        this.state = {
            employment_details:[],
        }
        this.reloadRequestList = this.reloadRequestList.bind(this);
    }
    componentDidMount(){
        this.reloadRequestList()
     } 
     
     reloadRequestList() {
        WorkerService.getrequests()
            .then((res) => {
                this.setState({employment_details:res.data})
            });
    }


    updatelist(emp_id){
        alert(emp_id)
        WorkerService.updateempdetailsstatus(emp_id)
            .then((res) => {
                this.setState({employment_details:res.data})
            });
        this.props.history.push('/workerhome/:userid');
    }


    declinerequest(){
        alert("You have declined request !!")
        this.props.history.push('/workerhome/:userid');

    }
  
    render() {
        return (
                <div>
                <div>
                <h2 className="text-center">Request Details</h2>
                <h5 align="right" margin-right="5px"><a href="/workerhome/:userid" >Jump Back to HomePage</a></h5>
                <div className="row">
                    <table className = "table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th><h6>Employement Id</h6></th>
                                <th><h6>Request Date</h6></th>
                                <th><h6>Request Status</h6></th>
                                <th><h6>No_of_workers</h6></th>
                                <th><h6>Work Days</h6></th>
                                <th><h6>Address</h6></th>
                                
                            </tr>
                        </thead>  
                        <tbody>
                            {
                                
                      this.state.employment_details.map(
                        employment_details =>
                        <tr key ={employment_details.emp_id}>
                                    <td>{employment_details.emp_id}</td>
                                    <td>{employment_details.req_date}</td>
                                    <td>{employment_details.req_status}</td>
                                    <td>{employment_details.no_of_workers}</td>
                                    <td>{employment_details.work_days}</td>
                                    <td>{employment_details.address}</td>
                                  
                                  <td>
                                <button className="btn btn-success" onClick={() => this.updatelist(employment_details.emp_id)}>Accept</button>
                                <button className="btn btn-warning" onClick={() => this.declinerequest()}>Decline</button></td>    
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

export default ViewRequest;