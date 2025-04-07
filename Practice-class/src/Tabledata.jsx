import Offdata from "./Officedata";

const OfficeTable=()=>{
    const ans=Offdata.map((key)=>{
         return(
          <>
          <tr>
            <td>{key.name}</td>
            <td>{key.id}</td>
            <td>{key.salary}</td>
            <td>{key.desig}</td>
            <td>{key.number}</td>
          </tr>
          </>
         )
    })
  return(
    <>
        <table border="1" cellSpacing={10} cellPadding={10} 
        style={{fontSize:30}}>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Mobile No.</th>
          </tr>
          {ans}
          </table>      
    </>
  )
}

export default OfficeTable;