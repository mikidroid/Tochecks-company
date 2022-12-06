import React ,{ Component }from "react";
import {FiActivity, FiHome, FiCast,FiPieChart ,FiBarChart2, FiLayers, FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiPieChart />,
        title: 'Real Estate Investment',
        description: 'Guided by the principles of Integrity, Excellence, Respect, Team work and Diligence, we at Tochecks are committed to provide unparalleled quality, one-on-one real estate services.'
    },  
    {
        icon: <FiPieChart />,
        title: 'Real Estate Services',
        description: 'Our Corporate Real Estate Services focus on aligning your real estate strategy that is both cost effective and in line with your business objectives.'
    },
    {
        icon: <FiActivity />,
        title: 'Management Consultancy',
        description: 'We have a skilled and highly experienced team which can assist you from initial requirement gathering to implementation and post implementation support. We already have established partnerships with global clientele and are looking to expand it further.'
    },
    {
        icon: <FiActivity />,
        title: 'General Cleaning Services',
        description: 'Cleaning is an integral part of any Estate and it is required to keep up High pressure water cleaning the appearance and create an ambient Carpet cleaning and shampooing atmosphere for those living there.'
    },
    { 
        icon: <FiHome />,
        title: 'Property Management',
        description: 'Our facility management services are available to help you in outsourcing the those pressing concerns with your home, such as cleaning, fumigation, janitorial and house maintenance needs.'
    },
    {
        icon: <FiUsers />,
        title: 'Fumigation Service',
        description: 'At the forefront of the wellness industry is Tochecks integrated Services, taking innovative measures with international best practices to tackle pests and prevent further infestation of the environment'
    },
    {
        icon: <FiActivity />,
        title: 'General Logistics',
        description: 'We clearly understand the need to deliver superior service levels and provide a constant line of communication through the utilization of first tier and specialized service providers Tochecks is able to deliver to your predetermined parameters.'
    },    
]


class ServiceThree extends Component{
    render(){
        const {column} = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={/*"/service-details"*/'#service'}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;




