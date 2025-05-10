import Carousel from 'react-bootstrap/Carousel';
import weblogo from "../Image/logo.jpg";
import img1 from "../Image/slider1.png";
const Home=()=>{
    return(
        <>
        
          <Carousel>
      <Carousel.Item interval={500}>
        <img src={img1} width="100%" height="200px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
       <img src={img1} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>

        <img src={img1} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
          
        </>
    )
}

export default Home;