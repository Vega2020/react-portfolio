import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PortfolioCarousel from '../PortfolioCarousel';
import PortfolioAccordion from '../PortfolioAccordion';

function MyTabs() {
  return (
  <Tabs defaultActiveKey="portfolio" id="mainTabs">

  <Tab eventKey="portfolio" title="Portfolio">
    <PortfolioCarousel></PortfolioCarousel>
    <PortfolioAccordion></PortfolioAccordion>
  </Tab>

  <Tab eventKey="about" title="About">
    <p>Hello World</p>
  </Tab>

  <Tab eventKey="contact" title="Contact">
    <p>flowersje08@gmail.com</p>
  </Tab>
</Tabs>
  )
}

export default MyTabs