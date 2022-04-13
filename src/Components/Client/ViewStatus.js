import React, { Component } from 'react';
import ClientService from './ClientService';

class ViewStatus extends Component{

    constructor(props){
        super(props)
        this.state = {
            viewstatus:[],
        }

        this.reloadRequestList = this.reloadRequestList.bind(this);
    }

    componentDidMount(){
        this.reloadRequestList()
     } 
     
     reloadRequestList() {
        
        ClientService.getbystatus(localStorage.getItem("client_id"))
            .then((res) => {
                this.setState({viewstatus:res.data});
            });
    }

    render() {
        return (
                <div>
                <div><br/>
                <h5 align="right"><a href="/clienthome/:userid">Jump to HomePage</a></h5>
                <h2 className="text-center">Status</h2>
                <div className="row">
                    <table className = "table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th><h6>Employement Id</h6></th>
                                <th><h6>Request Date</h6></th>
                                <th><h6>Request Status</h6></th>
                                <th><h6>No. of Workers</h6></th>
                                <th><h6>Work Days</h6></th>
                                <th><h6>Address</h6></th>
                            </tr>
                        </thead>  
                        <tbody>
                            {
                                
                      this.state.viewstatus.map(
                        viewstatus =>
                        <tr key ={viewstatus.client_id}>
                                    <td>{viewstatus.emp_id}</td>
                                    <td>{viewstatus.req_date}</td>
                                    <td>{viewstatus.req_status}</td>
                                    <td>{viewstatus.no_of_workers}</td>
                                    <td>{viewstatus.work_days}</td>
                                    <td>{viewstatus.address}</td>
                                  <td>
                                </td>    
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

{/*
class ViewStatus extends Component{

    constructor(props){
        super(props)
        this.state = {
            viewstatus:[],
        }

        this.reloadRequestList = this.reloadRequestList.bind(this);
    }

    componentDidMount(){
        this.reloadRequestList()
     } 
     
     reloadRequestList() {
        
        ClientService.getbystatus(localStorage.getItem("client_id"))
            .then((res) => {
                this.setState({viewstatus:res.data})
            });
    }

    render() {
        return (
                <div>
                <div><br/>
                <h5 align="right"><a href="/clienthome/:userid">Jump to HomePage</a></h5>
                <h2 className="text-center">Status</h2>
                <div className="row">
                    <table className = "table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th><h6>Employement Id</h6></th>
                                <th><h6>Request Date</h6></th>
                                <th><h6>Request Status</h6></th>
                                <th><h6>No. of Workers</h6></th>
                                <th><h6>Work Days</h6></th>
                                <th><h6>Address</h6></th>
                            </tr>
                        </thead>  
                        <tbody>
                            {
                                
                      this.state.viewstatus.map(
                        viewstatus =>
                        <tr key ={viewstatus.client_id}>
                                    <td>{viewstatus.emp_id}</td>
                                    <td>{viewstatus.req_date}</td>
                                    <td>{viewstatus.req_status}</td>
                                    <td>{viewstatus.no_of_workers}</td>
                                    <td>{viewstatus.work_days}</td>
                                    <td>{viewstatus.address}</td>
                                  <td>
                                </td>    
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
*/}
export default ViewStatus;