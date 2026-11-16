import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card(item, {userType} ) {  
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img_url} />
      <Card.Body>
        <Card.Title>{item.product_name}</Card.Title>
        <Card.Text>
            {item.product_desc}
        </Card.Text>
        <div className='horizontal'>
            { userType === "marketing" ? (
              <Button variant="warning" href="/form">Editar</Button>
            ) : (
              <Button variant="primary" onClick={() => setCarro(Carro + [])}>Agregar al carro</Button>
            )}
            <div className='vertical'>
                {discount ? <p className='discount'>${item.discount}</p> : null }
                <p classname='price'>${item.price}</p>
            </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Card;