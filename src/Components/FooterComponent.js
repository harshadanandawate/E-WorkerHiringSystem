import './FooterComponent.css'
import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="fixed-bottom">
                <footer className = "footer footer-dark">
                    <h5> © All Rights Reserved @KnowIt_DACProjects 2022</h5>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;