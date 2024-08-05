
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Televisores.css';
import CartContext from '../../CartContext/CartContext';
import ListaTelevisores from './ListaTelevisores'

function Televisores() {
  const { addToCart } = useContext(CartContext); 
  const [selectedTelevisoresId, setSelectedTelevisoresId] = useState(false);

  const handleClickEnInformacion = (id) => {
    if (selectedTelevisoresId === id) {
      setSelectedTelevisoresId(false);
    } else {
      setSelectedTelevisoresId(id);
    }
  }



  return (
    <div>
      <div className='padre-cartas'>
        {ListaTelevisores.televisoresData.map((televisores) => {
          return(

          <Card key={televisores.id} className='carta' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={televisores.img} />
          <Card.Body>
            <Card.Title className='titulo-card'>{televisores.title}</Card.Title> 
            <Card.Text>
              {televisores.price}USD
            </Card.Text>
            <button className='btn btn-primary' onClick={() => addToCart(televisores)}>Agregar al carrito</button>
                <Button className='informacion' variant="primary" onClick={() => handleClickEnInformacion(televisores.id)}>
                  {selectedTelevisoresId === televisores.id ? 'Ocultar información' : 'Mostrar información'}
                </Button>
                {selectedTelevisoresId === televisores.id && <p>{televisores.desc}</p>}
              </Card.Body>
        </Card>
          )
        })}
      </div>
    </div>
  );
}

export default Televisores;
