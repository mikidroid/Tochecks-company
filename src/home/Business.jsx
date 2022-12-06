import React, { Component , Fragment } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import PortfolioList from "../elements/portfolio/PortfolioList";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import Gallery from "../component/HomeLayout/homeOne/gallery";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Team from "../elements/Team";
import Accordion01 from "../elements/Accordion";
import { FiCheck, FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import { ProgressBar } from 'react-bootstrap';

const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--17',
        category: '',
        title: 'Real Estate Services',
        description: 'We at Tochecks are committed to provide unparalleled quality, one-on-one real estate services.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--18',
        category: '',
        title: 'Management Consultancy.',
        description: 'We already have established partnerships with global clientele',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--19',
        category: '',
        title: 'Property Management.',
        description: 'Our facility management services are available to suit your needs',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const ServiceListOne = [
    {
        icon: "icon-01.png",
        title: 'Real Estate Investment',
        description: 'Guided by the principles of Integrity, Excellence, Respect, Team work and Diligence, We at Tochecks are committed to provide unparalleled quality, one-on-one real estate services.'
    },
    {
        icon: "icon-02.png",
        title: 'Management Consultancy',
        description: 'We have a skilled and highly experienced team which can assist you from initial requirement gathering to implementation and post implementation support. We already have established partnerships with global clientele'
    },
    {
        icon: "icon-03.png",
        title: 'Property Management',
        description: 'Our facility management services are available to help you in outsourcing the those pressing concerns with your home, such as cleaning, fumigation, janitorial and house maintenance needs.'
    },
      {
        icon: "icon-01.png",
        title: 'General Cleaning Services',
        description: 'Cleaning is an integral part of any Estate and it is required to keep up High pressure water cleaning the appearance and create an ambient Carpet cleaning and shampooing atmosphere for those living there.'
    },
      {
        icon: "icon-02.png",
        title: 'Fumigation Service',
        description: 'At the forefront of the wellness industry is Tochecks integrated Services, taking innovative measures with international best practices to tackle pests and prevent further infestation of the environment.'
    },
]

class Business extends Component{
    constructor (props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
            'The Ultimate Deal On business',
        ];
        var namesItemTwo = [
            'Proof That business Really Works',
            'Here Is What You Should Do For Your business',
            'The Hidden Mystery Behind business',
        ];
        
        const PostList = BlogContent.slice(0 , 3);

        return(
            <Fragment> 
                <Helmet pageTitle="TOCHECKS" />
                <Header />
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}
                

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="feature-area">
                                    <span>Real Estate Services</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8"> Our Corporate Real Estate Services focus on aligning your real estate strategy that is both cost effective and in line with your business objectives.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper mt--30">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src={`/assets/images/icons/${val.icon}`} alt="Service Icon"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{val.title}</h4>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Products Area */}

                <div id="products" className="portfolio-area ptb--20 bg_color--1">

                    <div className="portfolio-sacousel-inner mb--5">
                        <Portfolio />
                    </div>
                </div>
                {/* End Portfolio Area */}
                
             {/* Start About Area  */}
            <div className="rn-about-area ptb--120 bg_color--1">
                <div className="rn-about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">What do we do?</h2>
                          <p className="description">We strive to create measurable client value through the maximization of information technology and innovative business solutions. We provide solutions that transcend all areas ofyour business through the integrated use of our cohesive disciplines; business consulting and mission-oriented technological solutions.</p>
                                    </div>
                                    <div className="row mt--30">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Our Working Process.</h3>
                                                <div className="rn-progress-bar progress-bar--3">
                                                    <div className="single-progress custom-color--1">
                                                        <h6 className="title">Preparing Listing</h6>
                                                        <ProgressBar now={20} />
                                                        <span className="label">20%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--2">
                                                        <h6 className="title">Name Your Price</h6>
                                                        <ProgressBar now={40} />
                                                        <span className="label">40%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--3">
                                                        <h6 className="title">Organize Property Viewing</h6>
                                                        <ProgressBar now={60} />
                                                        <span className="label">60%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--4">
                                                        <h6 className="title">Sales Negotiation</h6>
                                                        <ProgressBar now={80} />
                                                        <span className="label">80%</span>
                                                    </div>
                                                    
  <div className="single-progress custom-color--4">
                                                        <h6 className="title">Close Sale</h6>
                                                        <ProgressBar now={100} />
                                                        <span className="label">100%</span>
                                                    </div>                                                  
                                                </div>
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

                
                 {/* Start Call To Action Area  */}
                <div className="call-to-action-wrapper call-to-action bg-dark text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80" id="getstart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="inner text-left">
                                    <span>READY TO DO THIS</span>
                                    <h2>Get Started with us</h2>
                                    <a className="rn-button-style--2 mt--70 mt_sm--30 mt_md--30" href="/contact"><span>Contact Us</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Call To Action Area  */}               

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">About</h2>
<p>Tochecks Integrated Services Ltd is an Incorporated Professional Real Estate, Investment and Facility Management Company based in Abuja, Nigeria. </p><p>Our services enable our clients to achieve high-impact business results. </p><p>As a trusted solutions-provider, we strive to create measurable client value through the maximization of information technology and innovative business solutions.</p>
<p> We provide solutions that transcend all areas ofyour business through the integrated use of our cohesive disciplines; business consulting and mission-oriented technological solutions. </p><p>Our mission focuses to help our prospective clients achieve their business objectives by delivering and supporting practical cost-effective services and solutions.</p><p> Assuring prospective client our best services, we look forward to the opportunity to establish a cordial relationship with you.</p>
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

                {/* Start Gallery Area */}

                <div id="gallery" className="portfolio-area ptb--120 bg_color--1">

                    <div className="portfolio-sacousel-inner mb--55">
                        <Gallery />
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default Business;