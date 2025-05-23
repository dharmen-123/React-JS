import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BackendUrl from '../BackendUrl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import img1 from "../Image/slider1.png";
import img3 from "../Image/slider3.png";
import img5 from "../Image/slider5.gif";
import img6 from "../Image/slider6.gif";

const Home=()=>{
 const [mydata, setMydata] = useState([]);
    const dispatch= useDispatch();
    const notify = () => toast('Wow so easy !');
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
        <Card style={{ width: '17rem' , color:"white", borderRadius:"20px", padding:"0px" }}>
         {/* <FaCircleInfo  style={{cursor:"pointer",alignItem:"center" ,right:"10px",position:"absolute", fontSize:"35px",color:"black"}} /> */}
         <FaHeart  
          style={{cursor:"pointer",alignItem:"center",position:"absolute" , fontSize:"25px" , color:"red",top:"1%",left:"10px" }} />

      <Card.Img variant="top" src={key.image} style={{height:"260px", borderRadius:"20px 20px 0px 0px"}} />
      <Card.Body style={{backgroundColor:"#5b3e31", borderRadius:"5px 5px 20px 20px", height:"140px" , padding:"1px"}}>
        <Card.Title><h5>{key.name}</h5></Card.Title>
        <Card.Text>
          {/* {key.description} */}
        </Card.Text>
        <h5> Price : {key.price}</h5>
        <Button variant="primary" style={{marginLeft:"10px"}} 
        onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,category:key.category, image:key.image, qnty:1, price:key.price }))}}
        >Add To Cart</Button>
      </Card.Body>
    </Card>
            
            </>
        )
    })


    return(
        <>
          <Carousel style={{marginTop:"5%"}}>
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
          <h1 style={{textAlign:"center"}}>Our latest Product</h1>
        <br/>
          <div className='homeProduct'>
          {ans}
          </div>
        <br/>
           
     <ToastContainer />
        </>
    )
}

export default Home;