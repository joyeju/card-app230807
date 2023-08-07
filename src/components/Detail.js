import React, { useEffect, useRef } from "react"
// import Card from "./Card"
import { Link } from 'react-router-dom';

function Detail(props) {

    const descRef = useRef()
    useEffect(() => {
        descRef.current.innerHTML = props.content.description
    })

    return <div style={{border:"3px solid white",margin:"10% auto", borderRadius:"20px",width:"80%",height:"500px"}}>
            
            <div className="content" style={{ display:'flex', alignItems: 'center',height:"500px"}}>
                <div className="image-text" style={{width: 350, height: 315, margin: 'auto' }}>
                    <img src ={props.content.imgSrc} style={{display:'block', margin:"auto",whith:"300px",height:"145px"}} /><br />
                    <h2 style={{margin:"2%",position:"relative",fontSize:"32px"}}>{props.content.detailTitle}</h2><br />
                    <h2 ref={descRef} style={{height:"80px",margin:"2%",fontSize:"18px"}}>
                    </h2><br />
                    <Link to="/">
                    <button  style={{width:"200px",height:"30px", marginLeft:"300px",
                    border:"3px solid white",backgroundColor:"rgba(0,0,0,0)",padding:"5px",borderRadius:"10px"}}>돌아가기</button>
                     </Link>
                </div>
             
                
                <iframe style={{margin: 'auto' }} width="560" height="315" src={props.content.videoSrc}
                frameborder="0" allowfullscreen>
                       </iframe>
                
            </div>
                    
    </div>
  
}         

export default Detail