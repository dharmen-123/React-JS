import EmpData from "./EmpData"
import EmpDesign from "./EmpDesign"

const App=()=>{
     
    const ans=EmpData.map((key)=> <EmpDesign 
    eno={key.empno}
    nm={key.name}
    design={key.designation}
    sal={key.salary}
    />)
  return(
       <>
       <h1 align="center"> Welcome to React Class</h1>
       <hr />
      <table align="center" border='1' width="600px">
        <tr>
          <th>Emp name</th>
          <th>name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
        {ans}
       </table>
       </>
  )
}

export default App;
