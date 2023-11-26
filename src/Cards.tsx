import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Cards(name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ziontutorial.com/wp-content/uploads/2022/08/maxresdefault.jpg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Click To View</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;