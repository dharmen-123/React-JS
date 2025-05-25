import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { qntyInc, qntyDec, proRemove } from "../cartSlice";
import { FaRupeeSign } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { ToastContainer, toast } from 'react-toastify';

const MyCart=()=>{
    const cartData= useSelector(state=>state.mycart.cart);
    const dispatch = useDispatch();
   const notify = () => toast('Wow so easy !');
    let TotAmount=0;
   const ans=cartData.map((key)=>{
    TotAmount+=key.qnty*key.price;
    return(
        <>
          <tr>
            <td>
                {/* <img src= {key.image} width="150" height="130" /> */}
                <Image src= {key.image} roundedCircle width="150" height="130"/>
                </td>
            <td>{key.name}</td>
            <td><h6>{key.description}</h6></td>
            <td style={{fontSize:"20px"}}>
            <FaMinusSquare onClick={()=>{dispatch(qntyDec({id:key.id}))}} style={{cursor:"pointer"}} />
                {key.qnty}

            <FaPlusSquare onClick={()=>{dispatch(qntyInc({id:key.id}))}} style={{cursor:"pointer"}} />
             
             </td>
            <td>{key.price}</td>
            <td >
                <Button variant="success" style={{fontSize:"25px"}}>{key.qnty * key.price}</Button>
            </td>
            <td style={{fontSize:"30px"}}>
                  <Button variant="danger" style={{cursor:"pointer"}} onClick={()=>{dispatch(proRemove({id:key.id}))}}>Remove</Button>
            </td>
          </tr>
        
        </>
    )
   })
    return(
        <>
        <br/><br/><br/>
        
          <h1 align="center">Cart Items</h1>

          <Table   style={{textAlign:"center",backgroundColor:"white" , border:"0px solid white", width:"85%" , margin:"auto"}}>
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Priduct Name</th>
          <th>Category</th>
          <th> Quantity </th>
          <th> Price</th>
          <th> Total Price</th>
          <th>Delete Item</th>
        </tr>
      </thead>
      <tbody style={{textAlign:"center",alignContent:"center" , fontSize:"25px"}}>
        {ans}
        </tbody>
       </Table>
       <br/>
          <hr />
          <h2 align="center">Total: <FaRupeeSign style={{fontSize:"25px" ,alignContent:"center"}}/>{TotAmount}
           <Button variant="primary" style={{textAlign:"center"}}>Pay Now</Button></h2>
       <ToastContainer/>
        </>
    )
}
export default MyCart;