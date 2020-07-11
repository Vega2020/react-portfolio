import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// to make this work we'll make it ProjectCard(props) then put {props.whatever} in the card to fill it in. Then we can say something like ProjectCard(react-portfolio) to fill in the title, github address and deployment by making templates for those links. can probably also make images load the same way by titling the images with the same convention then making templates around them.

function ProjectCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placebear.com/100/100" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}

export default ProjectCard;