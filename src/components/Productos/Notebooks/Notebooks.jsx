import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Notebooks.css';
import CartContext from '../../CartContext/CartContext';
import ListaNotebooks from './ListaNotebooks'

function Notebooks() {
  const { addToCart } = useContext(CartContext); 
  const [selectedNotebooksId, setSelectedNotebooksId] = useState(false);

  const handleClickEnInformacion = (id) => {
    if (selectedNotebooksId === id) {
      setSelectedNotebooksId(false);
    } else {
      setSelectedNotebooksId(id);
    }
  }


  return (
    <div>
      <div className='padre-cartas'>
        {ListaNotebooks.notebooksData.map((notebooks) => {
          return(

          <Card key={notebooks.id} className='carta' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={notebooks.img} />
          <Card.Body>
            <Card.Title>{notebooks.title}</Card.Title> 
            <Card.Text>
              {notebooks.price}USD
            </Card.Text>
            <button className='btn btn-primary' onClick={() => addToCart(notebooks)}>Agregar al carrito</button>
            <Button className='informacion' variant="primary" onClick={() => handleClickEnInformacion(notebooks.id)}>
                  {selectedNotebooksId === notebooks.id ? 'Ocultar información' : 'Mostrar información'}
                </Button>
                {selectedNotebooksId === notebooks.id && <p>{notebooks.desc}</p>}
          </Card.Body>
        </Card>
          )
        })}
      </div>
    </div>
  );
}

export default Notebooks;