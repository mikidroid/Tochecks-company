import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import ProductList from "../config/product-list"
import * as RR from 'react-router-dom'
import Footer from "../component/footer/FooterTwo";
import C from '../config/config'
import {FcRating} from 'react-icons/fc'
import {ImLocation} from 'react-icons/im'
import {AiFillAlert} from 'react-icons/ai'
import {FaPhone,FaStar,FaMoneyBillAlt} from 'react-icons/fa'

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

 function PortfolioDetails(){
    const {id} = RR.useParams()
    const details = ProductList[id]
    
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Product Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{details.name}</h2>
                                    <p>{details.price} {details.pricing} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Product Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h4>{details.description}</h4>
                                         
                     {/*images start*/}   
                     
                          {details.images.length>0 ?  details.images.map(img=><img src={`/assets/images/product/${details.image}/${img}.jpg`} />) : 
                          <img src={`/assets/images/product/${details.image}.jpg`} />}
                          <div class="mt--20"/>
                          
                     {/*Images end */}
                         
                                        <div className="subtitle" dangerouslySetInnerHTML={{__html:details.content}}>
                                        
                                        </div>

                                        <div className="mt--40 portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view mt-3">
                                                <span><AiFillAlert/> Status</span>
                                                <h4 class="text-success"> {details.status}</h4>
                                            </div>

                                            <div className="port-view mt-3">
                                                <span><FaMoneyBillAlt/> Amount</span>
                                                <h4>{details.price} Naira - {details.pricing}</h4>
                                            </div>

                                            <div className="port-view mt-3">
                                                <span><ImLocation/> Location</span>
                                                <h4 class="text-danger">{details.location}</h4>
                                            </div>
                                           <div className="port-view mt-3">
                      <span><FaStar/> Rating</span>
                         <h4 class="text-info">{details.rating}</h4>
                                            </div>
                     <div className="port-view mt-3">
                      <span> Contact Available Agent</span>
                         <a href={`tel:${C.phones[0]}`}><h4 class="text-primary"><FaPhone/> Call Now</h4></a>
                                            </div>                                           
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                    
                                
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}


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
export default PortfolioDetails;
