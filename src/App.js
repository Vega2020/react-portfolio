import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import ProjectCarousel from './components/PortfolioCarousel';
import ProjectCard from './components/ProjectCard';

// Have a resume component that pops up on click

function App() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <ProjectCarousel />
    <ProjectCard></ProjectCard>
    </>
  );
}

export default App;
