import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";
import GalleryList from "../../../config/gallery-list"



export default function Gallery(){
  
        let title = 'View Our Estate Packages',
        description = 'We Have Amazing Estate Packages For You To Check Out';
        
        return(
            <React.Fragment>
                <div id="gallery" className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {GalleryList.map((value, index) => (      
                          
                            <a href={value.image}>
                          <img style={{
                            height:'250px',
                            width:'100%',
                            objectFit:'cover'
                          }} src={value.image}/>
                          </a>
                          
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }

