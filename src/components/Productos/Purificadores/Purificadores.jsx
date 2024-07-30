
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Purificadores.css';
import CartContext from '../../CartContext/CartContext';
import ListaPurificadores from './ListaPurificadores'

function Purificadores() {
  const { addToCart } = useContext(CartContext); 
  const [selectedPurificadoresId, setSelectedPurificadoresId] = useState(false);

  const handleClickEnInformacion = (id) => {
    if (selectedPurificadoresId === id) {
      setSelectedPurificadoresId(false);
    } else {
      setSelectedPurificadoresId(id);
    }
  }


  return (
    <div>
      <div className='padre-cartas'>
        {ListaPurificadores.purificadoresData.map((purificadores) => {
          return(

          <Card key={purificadores.id} className='carta' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={purificadores.img} />
          <Card.Body>
            <Card.Title>{purificadores.title}</Card.Title> 
            <Card.Text>
            {purificadores.originalPrice !== purificadores.price && (
                    <span className="precio-original">{purificadores.originalPrice}USD </span>
                  )}
                  <span className="precio-descuento">{purificadores.price}USD</span>
            </Card.Text>
            <button className='btn btn-primary' onClick={() => addToCart(purificadores)}>Agregar al carrito</button>
                <Button className='informacion' variant="primary" onClick={() => handleClickEnInformacion(purificadores.id)}>
                  {selectedPurificadoresId === purificadores.id ? 'Ocultar información' : 'Mostrar información'}
                </Button>
                {selectedPurificadoresId === purificadores.id && <p>{purificadores.desc}</p>}
              </Card.Body>
        </Card>
          )
        })}
      </div>
    </div>
  );
}

export default Purificadores;