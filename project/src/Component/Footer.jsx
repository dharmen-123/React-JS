// import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';
import weblogo from "../Image/copy.png";
const Footer = () => { 
    return (
         <footer className="footer text-white pt-5 pb-4">
         <div className="container text-md-left"> <div className="row text-md-left">

     <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <img src={weblogo} width="300px" height="100px"/>
        <h6 className="text-uppercase mt-4 mb-2">About Us</h6>
        <p>We want to help bring talented students and unique startups together.</p>
        <h6 className="text-uppercase mt-4 mb-2">Contact Us</h6>
        <p><FaPhoneAlt /> +91 9999 999 999</p>
        <p><FaEnvelope /> youremailid.com</p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold">Information</h5>
        <p><a href="#" className="text-white">About Us</a></p>
        <p><a href="#" className="text-white">More Search</a></p>
        <p><a href="#" className="text-white">Blog</a></p>
        <p><a href="#" className="text-white">Testimonials</a></p>
        <p><a href="#" className="text-white">Events</a></p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold">Helpful Links</h5>
        <p><a href="#" className="text-white">Services</a></p>
        <p><a href="#" className="text-white">Supports</a></p>
        <p><a href="#" className="text-white">Terms & Condition</a></p>
        <p><a href="#" className="text-white">Privacy Policy</a></p>
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold">Subscribe More Info</h5>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter your Email" />
          <div className="input-group-append">
            <button className="btn btn-warning" type="button">Subscribe</button>
          </div>
        </div>
      </div>

    </div>

    <hr className="mb-4" />

    <div className="row align-items-center">
      <div className="col-md-7 col-lg-8">
        <p>© 2018 company.Ltd. All Rights reserved</p>
      </div>
      <div className="col-md-5 col-lg-4">
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item"><a href="#" className="btn-floating text-white"><FaFacebookF /></a></li>
            <li className="list-inline-item"><a href="#" className="btn-floating text-white"><FaGoogle /></a></li>
            <li className="list-inline-item"><a href="#" className="btn-floating text-white"><FaTwitter /></a></li>
            <li className="list-inline-item"><a href="#" className="btn-floating text-white"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

);
 };

export default Footer;