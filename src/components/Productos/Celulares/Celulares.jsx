import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Celulares.css';
import CartContext from '../../CartContext/CartContext';
import ListaCelulares from './ListaCelulares'

function Celulares() {
  const { addToCart } = useContext(CartContext); // Permite poder agrgar productos al carrito
  const [selectedCelularId, setSelectedCelularId] = useState(false); 

  const handleClickEnInformacion = (id) => {
    if (selectedCelularId === id) {
      setSelectedCelularId(false);
    } else {
      setSelectedCelularId(id);
    }
  }

  return (
    <div>
      <div className='padre-cartas'>
        {ListaCelulares.celularesData.map((celular) => {
          return (
            <Card key={celular.id} className='carta' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={celular.img} />
              <Card.Body>
                <Card.Title>{celular.title}</Card.Title> 
                <Card.Text>
                  {celular.originalPrice !== celular.price && (
                    <span className="precio-original">{celular.originalPrice}USD </span>
                  )}
                  <span className="precio-descuento">{celular.price}USD</span>
                </Card.Text>
                <button className='btn btn-primary' onClick={() => addToCart(celular)}>Agregar al carrito</button>
                <Button className='informacion' variant="primary" onClick={() => handleClickEnInformacion(celular.id)}>
                  {selectedCelularId === celular.id ? 'Ocultar información' : 'Mostrar información'}
                </Button>
                {selectedCelularId === celular.id && <p>{celular.desc}</p>}
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  );
}

export default Celulares;
