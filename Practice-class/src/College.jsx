
const College=(props)=>{
    return(
        <>
          <h1>My College Name:{props.clgnm} </h1>
          <h1>My Fees is: {props.fee}</h1>
          <h1>My City is : {props.city}</h1>
          <h1>My Course is : {props.course}</h1>
        </>
    )
}

export default College;