import React from "react";
import { Link } from "react-router-dom";
import { contents } from "../utillities/Contents";
import {Item,Image,Temp} from "./styledComp"

const Card = (props) => {
    const {content} = props //카드 내용을 의미하는 객체
    return <Item>
        <Link to={content.path}>
        <Image imagePath = {content.imagePath}></Image>
        {/* <Temp color={content.imagePath}></Temp> */}
        </Link>
        <h1 style={{textAlign:"center" ,fontSize:"32px"}}>{content.title}</h1>
        <p style={{padding:10,textAlign:"center",fontSize:"22px"}}>{content.character}</p>
    </Item>
  

}

export default Card