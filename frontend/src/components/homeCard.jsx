import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apilocal from '../miApi.js'

function Card(item, {userType}) {  
    return (
    <>
      { item.allowed === userType || item.allowed === "*" &&
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.section_name}</Card.Title>
          <Card.Text>
              {item.section_desc}
          </Card.Text>
          <Button href={item.section_url} variant="primary">Acceder seccion</Button>
        </Card.Body>
      </Card>
      }
    </>
  );
}

export default Card;