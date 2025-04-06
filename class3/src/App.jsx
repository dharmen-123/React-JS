import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const destinations = [
  { name: 'Paris', image: 'https://via.placeholder.com/300', description: 'Experience the charm of the City of Light.' },
  { name: 'Bali', image: 'https://via.placeholder.com/300', description: 'Relax on the beautiful beaches of Bali.' },
  { name: 'New York', image: 'https://via.placeholder.com/300', description: 'Explore the bustling streets of NYC.' },
];

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from "./images/n1.jpg";
import img2 from './images/n2.jpg';
import img3 from './images/n3.jpg';
import img4 from './images/n4.jpg';
import taj from './images/tajimg.jpeg';
import indgat from './images/indiagat.png'
import lotus  from './images/lotus.png'
import Qminar from './images/Qutubminar.png'
import nat1 from './images/nature1.png';
import nat2 from './images/nature2.png';
import nat3 from './images/nature3.png';
import nat4 from './images/nature4.png';
import paris from './images/paris.png';
import newyork from './images/new.png';
import adventure from './images/adven.png'
import forest from './images/forest.png'
import lake from './images/lake.png'


const App=()=>{
  return(
    <>
    <div id='mainbody'>
   <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <div className='navbar'>
          <Navbar.Brand href="#home" id='logo'>Tours</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='links'  href="#home">Home</Nav.Link>
            <Nav.Link className='links'  href="#features">Places</Nav.Link>
            <Nav.Link className='links'  href="#features">Gallery</Nav.Link>
            <Nav.Link className='links'  href="#features">Collection</Nav.Link>
            <Nav.Link className='links'  href="#features">About</Nav.Link>
            <Nav.Link className='links'  href="#pricing">Services</Nav.Link>
            <Nav.Link className='links'  href="#pricing">Login</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
      <Carousel>
      <Carousel.Item>
      <img src={img1}  width="100%" height="700px"/>
        <Carousel.Caption>
          <h3></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" width="100%" height="700px" />
        <Carousel.Caption>
          <h3></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" width="100%" height="700px" />
      <Carousel.Caption>
          <h3></h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt="" width="100%" height="700px" />
      <Carousel.Caption>
          <h3></h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <Container>
      <Row>
        <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={taj} />
      <Card.Body>
        <Card.Title>Taj Mahal</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lotus} />
      <Card.Body>
        <Card.Title>Lotus Temple</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Qminar} />
      <Card.Body>
        <Card.Title>Qutub Minar</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={indgat} />
      <Card.Body>
        <Card.Title>India Gate</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nat1} />
      <Card.Body>
        <Card.Title>Himachal</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nat2} />
      <Card.Body>
        <Card.Title>South india</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nat3} />
      <Card.Body>
        <Card.Title>Buddha</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nat4} />
      <Card.Body>
        <Card.Title>Golden Temple</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit here</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
      </Container>

      <Container className="text-center my-5">
      <Row className="mb-4">
        <Col>
          <h1>Discover Your Next Adventure</h1>
          <p>Plan your perfect getaway and explore breathtaking destinations.</p>
          <Button variant="primary">Start Your Journey</Button>
        </Col>
      </Row>

      <Row>
        {destinations.map((destination, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={paris}  />
              <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>{destination.description}</Card.Text>
                <Button variant="outline-primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <div style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}>
      <Container>
        {/* Carousel for Featured Destinations */}
        <Row className="mb-4">
          <Col md={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img4}
                  alt="Beach Destination"
                />
                <Carousel.Caption>
                  <h3>Relax at Stunning Beaches</h3>
                  <p>Discover the world's most beautiful coastlines.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={nat1}
                  alt="Mountain Adventure"
                />
                <Carousel.Caption>
                  <h3>Adventure in the Mountains</h3>
                  <p>Hike, climb, and explore breathtaking landscapes.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={nat2}
                  alt="City Tour"
                />
                <Carousel.Caption>
                  <h3>Explore Vibrant Cities</h3>
                  <p>Immerse yourself in culture, food, and nightlife.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Places Section */}
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={lake} />
              <Card.Body>
                <Card.Title>Serene Lakes</Card.Title>
                <Card.Text>Escape into tranquil waters and scenic beauty.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={forest} />
              <Card.Body>
                <Card.Title>Mystic Forests</Card.Title>
                <Card.Text>Wander through lush greenery and hidden wonders.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={adventure} />
              <Card.Body>
                <Card.Title>Desert Adventures</Card.Title>
                <Card.Text>Experience golden dunes and magical landscapes.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

      <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2025 Tour Visit. All rights reserved.</p>
        <p>
          <a href="/privacy" className="text-white mx-2">Privacy Policy</a> | 
          <a href="/terms" className="text-white mx-2">Terms of Service</a>
        </p>
        <p>Follow us:
          <a href="#" className="text-white mx-2">Facebook</a>
          <a href="#" className="text-white mx-2">Twitter</a>
          <a href="#" className="text-white mx-2">Instagram</a>
        </p>
      </div>
    </footer>

      </div>
    </>

  )
}

export default App;
