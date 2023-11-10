import { useState,useEffect } from "react"
import { Button } from "react-bootstrap";
function Users(){
   
    let [timer,settimer]=useState(0);
    let [istimmer,settimmerstatus]=useState(true)
    useEffect(()=>{
        if(istimmer){
            settimer(timer+1)
        }
        
    },[timer,istimmer])
    return(
        
        <>
            
            <p style={{marginTop:'90px'}}>Timmer</p>
            <code style={{fontSize:'28px'}}>{timer}</code><br></br>
            <br></br>
            <Button variant="primary" onClick={()=>settimmerstatus(!istimmer)}>{istimmer?'stop':'start'}</Button>{` `}
            <Button variant="primary" onClick={async()=>{await settimmerstatus(false);settimer(0)}}>Reset</Button>
        </>
    )
}
export default Users