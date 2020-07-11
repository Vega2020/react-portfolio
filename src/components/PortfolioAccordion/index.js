import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyAccordion() {
    return (
<Accordion>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Uplift
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <h1>Uplift</h1>
          <h2>Relaxation Randomized</h2>
          <p>Uplift is a simple app that delivers wholesome content as a pleasant distraction from traditional social media. Currently, the app delivers randomized content through API portals including Giphy, Spoonacular, and Youtube. Future iterations will allow saving and sharing of favorite content. This was a collaborative project.</p>
          <br />
          <p><a href="https://swist92.github.io/project1vibe/">Deployed Application via Github</a></p>
          <p><a href="https://github.com/Vega2020/project1vibe">Github repository</a></p>

      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        React Docs Walkthrough
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <h1>React Docs Walkthrough</h1>
        <h2>Let's do this together</h2>
        <p>React is an awesome web development tool, but it has a steep learning curve. The docs are well-written but intimidating, and don't go into as much detail as they could. Lucky for you, your friend Vega has gone over them in detail and published these annotated notes breaking it all down in plain language. We're in this together. Let's do it.</p>
        <br />
        <p><a href="https://github.com/Vega2020/react-tutorial">Github repository</a></p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        ReadMe Generator
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <h1>ReadMe Generator</h1>
        <h2>So you can get back to coding</h2>
        <p>Writing a readme is an important part of making a usable app, but it's hard to remember every section off the top of your head. This command line application collects all the necessary information from you with prompts and outputs it to a text file.</p>
        <br />
        <p><a href="https://github.com/Vega2020/Readme-Generator">Github repository</a></p>
        <p>Coming soon to Heroku</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Budget Tracker
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
        <h1>Budget Tracker</h1>
        <h2>Progressive Web App</h2>
        <p>This progressive budget tracker allows you to download the app from the browser and run it natively. You can enter transactions while offline and they'll be uploaded when you sign back in.</p>
        <br />
        <p><a href="https://github.com/Vega2020/budget-tracker">Github repository</a></p>
        <p>Deployed application via Heroku</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        EatDaBurger
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>

      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        Noats
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
    
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="6">
        ShapeShifter
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="6">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="7">
        ABA for Parents
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="7">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>
    )
}

export default MyAccordion
