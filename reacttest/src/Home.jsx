

const Home=()=>{
    return(
        <>
         <div style={{display:"flex",
    justifyContent:"center",
    margin: "20px auto",
    width:"500px",
    height:"300px",
    backgroundColor:"blue",
    border:"2px solid black",
    borderRadius:"20px"}} >
            <div style={{
                display:"flex",
                justifyContent:"center",
                margin: "50px auto",
                width:"400px",
                height:"200px",
                backgroundColor:"yellow",
                alignContent:"center",
                border:"2px solid black",
                borderRadius:"20px"
            }} >
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        margin: "50px auto",
                        width:"300px",
                        height:"100px",
                        textAlign:"center",
                        alignItems:"center",
                        backgroundColor:"red",
                        alignContent:"center",
                        border:"2px solid black",
                        borderRadius:"20px"
                    }}>
                        <h1>CYBROM</h1>
                    </div>
            </div>
         </div>
        </>
    )
}

export default Home;