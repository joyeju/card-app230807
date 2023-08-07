import React, { useState } from "react";
import {Route,Switch} from "react-router-dom"
import {Menu,Items} from "./styledComp"
import {contents} from "../utillities/Contents";
import Card from "./Card";
import Detail from "./Detail";


const Collection = (props) => {

    const [ searchValue, updateValue ] = useState("")

    return <div>
        
        <Menu>
            <img src="./images/tema.png" style={{width:"40px",padding:"10px",paddingBottom:'0'}} />
            <img src="./images/tema.png" style={{width:"70px",padding:"10px"}} /> 
            <h2>지브리 스튜디오 </h2>
            <input type="text" style={{position:"absolute",right:"30px",
            width:"200px",height:"30px",backgroundColor:"ivory",color:"black",textAlign:"left",
            borderRadius:"10px",fontSize:"18px",display:"flex"}} 
            placeholder="search" value={searchValue} onChange={e => updateValue(e.target.value)} />
        </Menu>
        <Switch>
            {contents.map((aContent,index)=>{
                
                return <Route path={aContent.path} key = {index}>
                    
                    <Detail content = {aContent.detail} />
                    
                </Route>
            })}
            <Route path="/">
                <Items>
                    {contents.map((aContent,index) => {
                        return aContent.title.includes(searchValue) ?  
                        <Card content ={aContent} ket ={index} /> : <></>
                    })}
                </Items>
            </Route>
        </Switch>
    </div>

}

export default Collection