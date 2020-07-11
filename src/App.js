import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import PortfolioCarousel from './components/PortfolioCarousel';
import ProjectCard from './components/ProjectCard';
import Tabs from 'react-bootstrap/Tabs'
import MyTabs from './components/MyTabs'
import Tab from 'react-bootstrap/Tab'

// Have a resume component that pops up on click

function App() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <MyTabs></MyTabs>
    {/* <PortfolioCarousel /> */}
    {/* <ProjectCard></ProjectCard> */}
    </>
  );
}

export default App;
