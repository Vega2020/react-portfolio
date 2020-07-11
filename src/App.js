import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyTabs from './components/MyTabs'

// Have a resume component that pops up on click

function App() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <MyTabs></MyTabs>
    {/* <ProjectCard></ProjectCard> */}
    </>
  );
}

export default App;
