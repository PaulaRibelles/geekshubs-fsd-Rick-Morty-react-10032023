import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardChar =({propCharacter}) => {
  console.log(propCharacter)
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={propCharacter.image} />
      <Card.Body>
        <Card.Title>{propCharacter.name}</Card.Title>
        <Card.Text>
            Status: {propCharacter.status}
        </Card.Text>
        <Card.Text>
            Gender: {propCharacter.gender}
        </Card.Text>
        <Card.Text>
            Origin: {propCharacter.origin.name}
        </Card.Text>
        <Button variant="success">More info</Button>
      </Card.Body>
    </Card>
  );
}

