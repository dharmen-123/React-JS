import { useState, useEffect } from "react";
import axios from "axios";

const App=()=>{
     const [Mydata , setdata]=useState([]);
     const [input , setinp]=useState({});
     const handleSubmit=async()=>{
        const api="http://localhost:3000/Todolist";
        const response=await axios.post(api,input);
        console.log(response.data);
        // setdata(response.data);
     };
     const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinp(values=>({...values,[name]:value}));
        console.log(input);
     }
     const Del=async(id)=>{
          const api=`http://localhost:3000/Todolist/{id}`;
         const response = await axios.delete(api);
         alert("delete Successful")
     }
     const  Onload=async()=>{
      const api="http://localhost:3000/Todolist";
      const  response= await axios.get(api);
        console.log(response.data);
        setdata(response.data);
     }  
     useEffect(()=>{
        Onload()
     },[])
    const Change=()=>{
      

    }
  const ans=Mydata.map((key)=>{
    return(
      <>
         <tr>
          <td><input type="checkbox" name="" id="" onClick={Change()} /></td>
          <td id="taskline">{key.task}</td>
          <td>{key.category}</td>
          <td><button onClick={Del}>Delete</button></td>
          </tr>

      </>
    )
  })
  return(
    <>
      <div>
        <h1>TO-DO List</h1>
        <input type="text" placeholder="Enter your task" name="task" onChange={handleinput} />
        <select name="category" id="" onChange={handleinput}>
          <option value="category">Category</option>
          <option value="office">Office</option>
          <option value="study">Study</option>
          <option value="home">Home</option>
        </select>
        <button onClick={handleSubmit}> Add </button>
      </div>
      <div>
          <table border={1}>
            <thead>
              <tr>
                <th></th>
                <th>Task</th>
                <th>Category</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {ans}
            </tbody>
          </table>
      </div>
    </>
  )
}

export default App;