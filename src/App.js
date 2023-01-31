import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {data} from './data'
import { useContext, useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  const [card,setcard]=useState(data)
  const [item,setitem]=useState (0)
 
  
  return (
    <div className="App">
     < Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.2">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <span>cart{item}</span>
      </Container>
    </Navbar>
    
    <br></br>
    <header className='bg-dark py-5'>
      <div className='container'>
        <h1>Shop in style</h1>
        <p>with this shop hompeage template</p>

      </div>
      </header>
      <br></br>
<div className='card'>
  

      {card.map((prod,idx)=>(
      <Carddatails
      key={idx}
      prodIamge={prod.prodIamge}
      prodName={prod.prodName}
      prodprice={prod.prodprice}
      prodrating={prod.prodrating}
      idx={idx}
      setitem={setitem}
      setcard ={setcard}
      item={item}
      card={card}

     />
         ))}
      </div>
     </div>
  );
}

export default App;


function Carddatails({prodIamge,prodName,prodprice,prodrating,idx,setitem,setcard,item,card}){
let count=0
  const [showBtn,setshowBtn]=useState(true)

  const handlecartAdd=(idx)=>{
    setshowBtn(!showBtn)
    setitem(item +1)

  }
  const handlecartRemove=(idx)=>{
    setshowBtn(!showBtn)
    setitem(item -1)

  }
  return(
  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prodIamge} />
        <Card.Body>
          <Card.Title>{prodName}</Card.Title>
          <p>{prodrating}</p>
          <Card.Text>
            {prodprice}
          </Card.Text>
          
        </Card.Body>
        <div  className='cad'>
          {showBtn ?
        <Button onClick={()=>handlecartAdd(idx,setitem,item)} variant="primary">Add</Button>:
        <Button onClick={()=>handlecartRemove(idx,setitem,item)}variant="secondary">Remove</Button>
        }
        </div>
      </Card>
  )

}
