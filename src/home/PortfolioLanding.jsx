import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Helmet from "../component/common/Helmet";

//From MainDemo (wanted to customize to my liking)
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import BrandTwo from "../elements/BrandTwo";
import Footer from "../component/footer/Footer";

import { TypeAnimation } from 'react-type-animation';

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Professional Real Estate Agent',
        title: 'I’m <span>Nwankwo Tochukwu</span>',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
const PortfolioLanding = () => {
    let title = 'About'
    let description = `Nwankwo Tochukwu enjoys volunteerism and Humanitarian activity which are some of the characteristics of a true Rotarian. An Animal scientist by training and Real estate by practice. <p/><p/>
He is the Chairman of Planet-Next Intermedium Limited. An Indigenous real estate company, and a major player/active competitor in the industry.
He is also the Managing Director of Tochecks Integrated Services limited: Investment Estate Management/sales, a facility management company here in Abuja F.C.T.
`;
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div>
        
        
            <Helmet pageTitle="Portfolio Landing" />
            <HeaderThree homeLink="/" logo="symbol-darkh" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">

                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? 
                          <>               
        
                          <h1 className="title" dangerouslySetInnerHTML={{__html: value.title}}>
                                            </h1>
<TypeAnimation
      sequence={[
        'Hello Dear', // Types 'One'
        1000, // Waits 1s
        'You are most welcome', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'You need a Home or commercial space?', // Types 'One'
        1000, // Waits 1s
        'You need to sell?', // Types 'One'
        1000, // Waits 1s
        'I\'m happy to propose solutions that suit your needs.', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        
        'I will be Going Above and Beyond To Find Your Next Home',
        1000,
        
        'If you have the opportunity to suggest a real estate agent to anyone, think of me',
        10000,
        
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em',marginTop:'20px 0px',fontWeight:'medium' }}
    />
                                            
</> : ''}
                                            {value.description ? <p className="description"   dangerouslySetInnerHTML={{__html: value.description}}></p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-7.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description"   dangerouslySetInnerHTML={{__html: description}}></p>
                                    <div className=" mt--20 mt_sm--10">
                                        <a class="btn btn-outline-danger" href="/about"><span className="text-danger">View More...</span></a>
                                    </div>
                                        </div>
                                 
                                
                                        
                                        <div className="row mt--50">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">My Services</h2>
                                    <p>In broad perspective, the ranges of services we provide are as follows: </p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

                {/* Start Portfolio Area */}

                <div className="portfolio-area ptb--120 bg_color--1">

                    <div className="portfolio-sacousel-inner mb--55">
                        <Portfolio />
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start CounterUp Area */}

                <div className="rn-counterup-area pt--25 pb--110 bg_color--1">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2 className="title">My Fun Facts</h2>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Testimonial Area */}
                <div id="testimonial" className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                       <h2 className="title text-center mb--50">Client Testimonials</h2>
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
            
                {/* Start Brand Area 
                <div className="rn-brand-area brand-separation bg_color--5 pb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                 End Brand Area */}

            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactOne />
                </div>
            </div>
            {/* End COntact Area */}

            <Footer />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default PortfolioLanding;
