import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'
import NavBar from './components/NavBar';
import NewsBoard from './components/NewsBoard';

const App = () => {
  const [category,setCategory] = useState("general");

  return (
<>
<NavBar setCategory={setCategory} />
<NewsBoard category={category}/>
</>


    // <div>
    //   <Button variant="primary">Primary</Button>{' '}
    //   <Button variant="secondary">Secondary</Button>{' '}
    //   <Button variant="success">Success</Button>{' '}
    //   <Button variant="warning">Warning</Button>{' '}
    //   <Button variant="danger">Danger</Button>{' '}
    //   <Button variant="info">Info</Button>{' '}
    //   <Button variant="light">Light</Button>{' '}
    //   <Button variant="dark">Dark</Button>
    //   <Button variant="link">Link</Button>


    //   <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     Dropdown Button
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>

    // <Spinner animation="border" role="status">
    //   <span className="visually-hidden">Loading...</span>
    // </Spinner>
    // </div>
  )
}

export default App
