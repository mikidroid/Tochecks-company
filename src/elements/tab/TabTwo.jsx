import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LicenseList from '../../config/license-list'

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Licenses & Certificates",
        tab2 = "Skills",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                 <div class="row">
                  {
                    LicenseList.map(({id},index)=>
                     <div class="col-6 lg-col-3">
                      <a href={`/assets/images/license/${id}.png`}>
                       <img src={`/assets/images/license/${id}.png`} />
                       </a>
                     </div>
                    )
                  }
                  </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="#">Attention to detail<span></span></a> 
                                               </li>
                                               <li>
                                                   <a href="#">Sound Communication <span></span></a> 
                                               </li>
                                               <li>
                                                  <a href="#">Problem Solving Skills <span></span></a>
                                               </li>
                                                    <li><a href="#">Active Listening <span></span></a>
                                               </li>                                               <li>
                                                  <a href="#">Integrity & Ethics<span></span></a>
                                               </li>
                                               <li>
                                                  <a href="#">Familiarity with rules and regulations <span></span></a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">MD/CEO<span> - Diamond Toin </span></a> 
                                               </li>
                                               <li>
                                                   <a href="/service">Chairman<span> - Planet Next Intermedium Limited</span></a>  Currently
                                               </li>
                                               <li>
                                                   <a href="#">Managing Director<span> - Tochecks Integrated Services limited</span></a> Currently
                                               </li>
                                               <li>
                                                   <a href="/service">Assistant Governor<span> - 1999/2020, Rotary year </span></a> 
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="#">B.Agric In Agriculture<span> - Michael Okpara university of Agriculture, Umudike</span></a> MOUAU
                                               </li>
                                               <li>
                                                   <a href="#">WAEC<span> - Government Secondary School </span></a> Owerri
                                               </li>

                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;