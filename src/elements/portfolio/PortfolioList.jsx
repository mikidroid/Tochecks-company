import React, { Component } from "react";
import {Link} from "react-router-dom";
import ProjectList from "../../config/project-list"



class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = ProjectList.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>ggg{value.category}</p>
                                    <h4><a href={'/portfolio-details/'+index}>{value.title}</a></h4>

                                </div>
                            </div>
                            <Link className="link-overlay" to="/portfolio-details"></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;