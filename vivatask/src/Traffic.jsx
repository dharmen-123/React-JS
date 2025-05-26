import { useState , useEffect} from "react";

const TrafficLight=()=>{

    const [light , setlight]=useState('red');    
    
    useEffect(()=>{
        let time;
        switch(light){
            case 'red':
                time=setTimeout(()=>setlight('red'),4000);
            case 'yellow':
                time=setTimeout(()=>setlight('yellow'),500);
            case 'green':
                time=setTimeout(()=>setlight('green'),3000);
            default:
            break
        }
    },[light]);

   const changecolor=(status)=>(
    light==status? status:'grey')
    
return(
        <>
       <div id="vertical">
         <div className="circle" style={{backgroundColor:changecolor('red')}} ></div>
         <div className="circle" style={{backgroundColor: changecolor('yellow')}} ></div>
         <div className="circle" style={{backgroundColor: changecolor('green')}} ></div>    
      </div>
      <div id="horizontal">
         <div className="circle" style={{backgroundColor:changecolor('red')}} ></div>
         <div className="circle" style={{backgroundColor: changecolor('yellow')}} ></div>
         <div className="circle" style={{backgroundColor: changecolor('green')}} ></div>    
      </div>
        </>
    )
}

export default TrafficLight;