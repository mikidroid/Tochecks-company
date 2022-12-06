import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';




class CounterOne extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                countNum : 100,
                countTitle: 'Happy Client',
            },
            {
                countNum : 200,
                countTitle: 'All Projects',
            },
            {
                countNum : 12,
                countTitle: 'Years of Experience',
            },
        ];

        return(
            <Fragment>
                <div className="row">
                    {Data.map( (value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor>
                            </h5>
                            <h5 className="description">{value.countTitle}</h5>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;