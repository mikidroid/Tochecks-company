import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import GalleryList from "../config/gallery-list"
import * as RR from 'react-router-dom'

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

 function GalleryDetails(){
    const {id} = RR.useParams()
    const details = GalleryList[id]
    const image = details.image.split('-')[1]
    
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Gallery' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{details.title}</h2>
                                    <p>{details.description} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h4>{details.category}</h4>
                                         
                     {/*images start*/}   
                     
                          {details.images.length>0 ?  details.images.map(img=><img src={`/assets/images/portfolio/image-${image}/image-${img}.jpg`} />) : 
                          <img src={`/assets/images/portfolio/portfolio-${image}.jpg`} />}
                          <div class="mt--20"/>
                          
                     {/*Images end */}
                         
                        <div className="subtitle" dangerouslySetInnerHTML={{__html:details.content}}>
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
export default GalleryDetails;
