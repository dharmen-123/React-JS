import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, completeTask, IncompleteTask, editDataSave} from "./Todoslice";
const Todo=()=>{
    const [txtval, setTxtval] = useState("")
    const [btnStatus, setBtnStatus] = useState(true);
    const [myid, setMyid] = useState("");
    const Data= useSelector(state=>state.todo.task);
    const dispatch = useDispatch();
    console.log(Data);


   const myEdit=(id, work)=>{
    setTxtval(work)
    setBtnStatus(false)
    setMyid(id)
   }


   const myeditSave=()=>{
      dispatch(editDataSave({id:myid, work:txtval}));
      setBtnStatus(true)           
   }
    let sno=0;
    const ans= Data.map((key, index)=>{
        sno++;
        return(
            <>
              <tr>
                <td> {sno}</td>
                <td>
                    
                    {key.status? 
                    (<>
                    
                   <span style={{color:"red", textDecoration:" line-through"}}>  {key.work}</span>    
                     </>):(<>{key.work}</>)}     
                  </td>
                <td> 
                    <button onClick={()=>{dispatch(removeTask({id:key.id}))}}>Del</button>
                    </td> 
                    <td>
                    <button
                    onClick={()=>{dispatch(completeTask({id:key.id}))}}> Complete</button>
                </td>
                <td>
                    <button  onClick={()=>{dispatch(IncompleteTask({id:key.id}))}}> UnComplete</button>
                </td>
                <td>
                    <button
                    onClick={()=>{myEdit(key.id, key.work)}}>Edit</button>
                </td>
              </tr>
            </>
        )
    })
    return(
        <>
        <h1>Welcome to tudu App!</h1>
        Enter : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}} />
      
       {btnStatus?(<>
        <button 
        onClick={()=>{dispatch(addTask({id:Date.now(), work:txtval, status:false}))}}>Add </button>
      
        </>):(<> 
         <button onClick={myeditSave}>Edit Save</button>
        </>)}
       
        <hr />
        <table>
            <tr>
                <th> Sno</th>
                <th> Work </th>
              
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Todo;