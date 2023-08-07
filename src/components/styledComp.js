import styled from "styled-components";

export const Menu = styled.div`
position: sticky; top: 0;
width: 100%; height: 100px;
font-size: 23px;
color: #FFFFFF;
background-color:black;
display: flex;
justify-content:center;
align-items:center;
z-index: 99;
`

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin:0 auto;

    @media all and (max-width: 1500px) {
        width: 80%;}
    @media all and (max-width: 1000px) {
            width: 100%;}
    
`

export const Item = styled.div`
        cursor: pointer;
        width: 46%; height: 400px;
        margin: 2%;
        border-radius: 20px;
        color: #FFFFFF;
       
        background-color: #393939;
        overflow: hidden;
        &:hover{
            transform:scale(1.2);
            -webkit-transform:scale(1.2);
            -moz-transform:scale(1.2);
            -ms-transform:scale(1.2);
            -o-transform:scale(1.2);
        }
        @media all and (max-width: 800px){
            width: 46%;
        }
        @media all and (max-width: 500px){
            width: 98%;
        }
`

export const Image = styled.div`
        height: 250px;
        background-image : url(${props =>props.imagePath});
        background-repeat : no-repeat;
        background-size: cover;
        background-position: center;
        @media all and (max-width: 500px){
            background-size: 100% 100%;
        }
        
`

export const Temp = styled.div`
        height:250px;
        background-color ${props =>props.color};
        background-repeat : no-repeat;
        @media all and(max-width: 500px){
            background-size: 100% 100%;
        }

`

