import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addTask  , removeTask,uncompleteTask, completeTask } from "./todoSlice";

const App=()=>{
  const [val, setval]=useState("");
  const data = useSelector(state=>state.todo.task);
  const dispatch = useDispatch();
  console.log(data);
  let sno=0;
  const ans=data.map((key ,  index)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.task}</td>
        <td>
          <button onClick={()=>{dispatch(completeTask({id:key.id}))}}>Complete</button>
          </td>
        <td>
          <button onClick={()=>{dispatch(removeTask({id:key.id}))}}>Delete</button>
          </td>
        <td>
          <button onClick={()=>{dispatch(uncompleteTask({id:index}))}}>Uncomplete</button>
        </td>
       </tr>
      </>
    )
  })


  return(
    <>
        <h1>Welcome To Do App</h1>
        Enter the Task:
        <input type="text" value={val}  onChange={(e)=>{setval(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTask({id:Date.now(), task:val}))}}>Add</button>

        <hr />
        <table border="1">
          <tbody>
         <tr>
          <th>Sno</th>
          <th colSpan="3">Task</th>
          </tr>
          </tbody>
          <tbody>
            {ans}
            </tbody>  
        </table>    
    </>
  )
}

export default App;
