import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";
import ProjectList from "../../../config/project-list"
import ProductList from "../../../config/product-list"


export default function Portfolio(){
  
        let title = 'Latest Deals',
        description = 'Check out the best deals from us with amazing prices';
        return(
            <React.Fragment>
                <div id="portfolio" className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
     
        <div class="row px-3 justify-content-center">            
     		
     		{ProductList?.map((item,i)=>
          <div class="col-10 col-md-5">
           <a href={'/product-details/'+i}>
    				<div class="card1 mt-4">
    					<div class="image-container">
    						<div class="first">
    							<div class="d-flex justify-content-between align-items-center">
    							<span class="discount">-{item.discount}%</span>
    							<span class="wishlist"><i class="fa fa-heart-o"></i></span>
    						    </div>
    						</div>

    						<img src={`/assets/images/product/${item.image}.jpg`} class="img-fluid rounded thumbnail-image" />
    					</div>
    					<div class="product-detail-container p-2">
    							<div class="d-flex justify-content-between ">
    								<h5 class="dress-name">{item.name}</h5>
    								<div class="d-flex flex-column mb-2">
    									<span class="new-price">N{item.price}</span>
    									<small class="old-price text-right">{item.pricing}</small>
    								</div>
    							</div>

    							<div class="d-flex justify-content-between align-items-center pt-0">
                  {item.description}
    							</div>
    							<div class="d-flex justify-content-between align-items-center pt-1">
    								<div>
    									<i class="fa fa-star-o rating-star"></i>
    									<span class="rating-number">{item.rating}</span>
    								</div>
    								<span class="buy">{item.status}</span>
    							</div>
    					</div>
    				</div>
    			</a>
    		</div>)}
        </div>         
                    
                </div>
            </React.Fragment>
        )
    }



