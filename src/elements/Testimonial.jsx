import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

     const data = [{
        author:'Omolola',
        position:'STAFF',
        company:'AMERIMAR ENTERPRISES, INC.',
        content:'Very understanding and professional, also well trusted',
        image:'/assets/images/client/testimonial-1.jpg'
     },{
        author:'Chinedu',
        position:'STAFF',
        company:'JONBERB INC',
        content:'Amazing service. Highly recommend',
        image:'/assets/images/client/testimonial-2.jpg'
     },{
        author:'Uche Smart',
        position:'CEO',
        company:'GNAM TECHNOLOGY.',
        content:'They are great. Look no further',
        image:'/assets/images/client/testimonial-3.jpg'
     }]


class Testimonial extends Component{

    render(){
        return(
            <React.Fragment>
                <div  className="row">
                    <div className="col-lg-12">
                        <Tabs>
                         {data.map((item,i)=>(
                            <TabPanel key={i}>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>{item.content}</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>{item.author} </span> - {item.position}, {item.company}</h6>
                                    </div>
                                </div>
                            </TabPanel>))}

                            <TabList className="testimonial-thumb-wrapper">
                            {data.map((item,i)=>
                                (<Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={item.image} alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>))}
                                
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;