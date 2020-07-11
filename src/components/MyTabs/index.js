import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PortfolioCarousel from '../PortfolioCarousel';

function MyTabs() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">

  </Tab>
  <Tab eventKey="profile" title="Profile">
    <PortfolioCarousel></PortfolioCarousel>
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>

  </Tab>
</Tabs>
  )
}

export default MyTabs