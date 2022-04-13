import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div align="center"><br/><br/><br/>
            <h1>You have been logged out!!</h1><br/>
            <Link to="/login"><Button outline color="secondary">Login Again</Button>{' '}</Link>
        </div>
        )
    }
}

export default Logout;


