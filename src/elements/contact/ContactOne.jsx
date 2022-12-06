import React, { Component } from "react";
import c from '../../config/config'
import ContactForm from "./ContactForm";

class ContactOne extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Hire Me.</h2>
                                <p className="description">I am available for freelance work. Connect with me via phone: <a href={`tel:${c.phones[0]}`}>{c.phones[0]}</a> or email:
                                    <a href={`mailto:${c.company_email}`}> {c.company_email}</a> </p>
                            </div>
                            <div className="form-wrapper">
                         {/*start contact form*/}
                         <ContactForm/>
                         {/*end contact form*/}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-6.jpg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactOne;