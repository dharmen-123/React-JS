import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";
import { addToCart } from '../cartSlice';
import { ToastContainer, toast } from 'react-toastify';
 
import w1 from "../Image/Watchess1.png";
import w2 from "../Image/watchess2.png";
import w3 from "../Image/watchess3.png";

const Watches=()=>{
  const [mydata, setMydata] = useState([]);
    const dispatch= useDispatch();
    const notify = () => toast('Wow so easy !');
    let api="http://localhost:3000/Watches"
    const loadData=async()=>{
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])

  const ans= mydata.map((key)=>{
        return(
            <>
           <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={key.image} style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
        </Card.Text>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Button variant="primary">Price :{key.price}</Button>
        <Button variant="outline-warning" 
         onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,category:key.category, image:key.image, qnty:1, price:key.price }))}}
         style={{color:"brown",fontSize:"30px", padding:"0px 8px 0px 6px"}}><FaCartArrowDown /></Button>
        </div>
      </Card.Body>
    </Card>  
            </>
        )
    })



    return(
        <>
        <br/><br/><br/>
          <Carousel data-bs-theme="dark" id="carousal">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w1}
          alt="First slide" height="700px"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w2}
          alt="Second slide" height="700px"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w3}
          alt="Third slide" height="700px"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <br/><br/><br/>
         <div id="watchesdiv">
          {ans}
         </div>
            <ToastContainer />
        </>
    )
}

export default Watches;