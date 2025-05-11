import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Image/slider1.png";
import img2 from "../Image/slider2.png";
import img3 from "../Image/slider3.png";
import img4 from "../Image/slider4.png";
import img5 from "../Image/slider5.gif";
import img6 from "../Image/slider6.gif";
import { useState, useEffect } from 'react';
import axios from 'axios';
import BackendUrl from '../BackendUrl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import { addToCart } from '../cartSlice';
// import { useDispatch } from 'react-redux';
const Home=()=>{
 const [mydata, setMydata] = useState([]);
//     // const dispatch= useDispatch();
   
    const loadData=async()=>{
      const response = await axios.get(BackendUrl);
      console.log(response.data);
      setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])

    const ans= mydata.map((key)=>{
        return(
            <>
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
        </Card.Text>
        <h3> Price : {key.price}</h3>
        <Button variant="primary"
        // onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,category:key.category, image:key.image, qnty:1, price:key.price }))}}
        >Add To Cart</Button>
      </Card.Body>
    </Card>
            
            </>
        )
    })


    return(
        <>
          <Carousel>
      <Carousel.Item interval={4000}>
        <img src={img1} width="100%" height="500px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
       <img src={img5}  width="100%" height="500px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src={img3}  width="100%" height="500px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src={img6}  width="100%" height="500px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
        <br/>
            <h1>Our latest Product</h1>
          <div className='homeProduct'>
          {ans}
          </div>
           <CardGroup>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          <button>Add to Cart</button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
     <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </>
    )
}

export default Home;