

const College =(props)=>{
    return(
        <>
        <h1>My College name: {props.clgname}</h1>
        <h1>Total Seats :{props.seat}</h1>
        <h1>Total fees : {props.fee}</h1>
        </>
    )
}  
 
export default College;