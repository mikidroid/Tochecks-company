import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";
import Team from "./Team";

class About extends Component{
    render(){
         let btn = 'btn btn-danger'
        let title = 'INTRODUCTION',
        description = '<p>Tochecks Integrated Services Ltd is an Incorporated Professional Real Estate, Investment and Facility Management Company based in Abuja, Nigeria. </p><p>Our services enable our clients to achieve high-impact business results. </p><p>As a trusted solutions-provider, we strive to create measurable client value through the maximization of information technology and innovative business solutions.</p><p> We provide solutions that transcend all areas ofyour business through the integrated use of our cohesive disciplines; business consulting and mission-oriented technological solutions. </p><p>Our mission focuses to help our prospective clients achieve their business objectives by delivering and supporting practical cost-effective services and solutions.</p><p> Assuring prospective client our best services, we look forward to the opportunity to establish a cordial relationship with you.</p>';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                     {/*   <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/> */}
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <div className="description"
                          dangerouslySetInnerHTML={{__html:description}}                  ></div>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title"><b>OUR MISSION</b></h3>
                                                    <p><b>The Aim of Our Organization is</b> to avail our expertise in the Real Estate and allied services sector, thus enabling our prospective clients to achieve their dreams of home ownership with ease, as well as serving related business concerns in an economically viable way</p>

                                      </div>
                                            </div>
<div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title"><b>OUR VISION</b></h3>
                        <p>
                         To become a formidable and foremost Real Estate services provider and professional Facility Management firm that exceeds our customer's expectations
</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}
                
                {/* Start Team Area  */}
                <div id="team" className="rn-team-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">Our Team</h2>
                                    <p>Our solid relentless Group ensure client satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}              

                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--120 mt--20 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h3 className={`title ${btn}`}>Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

  
                {/* Start Testimonial Area 
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                       <h2 className="title text-center mb--50">Client Testimonials</h2>
                        <Testimonial />
                    </div>
                </div>
                 End Testimonial Area */}

                {/* Start Brand Area 
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                 End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About