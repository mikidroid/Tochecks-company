import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || REAL ESTATE AGENCY </title>
                       <script src="https://smtpjs.com/v3/smtp.js"
                       type="text/javascript" />
                    <meta name="description" content="Tochecks – Real Estate Website ." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
