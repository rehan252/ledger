import React from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    display:flex;
    box-shadow: inset 0 -2px rgba(0,0,0,.05);
    align-items: center;
    fill: #fff;
    flex-flow: column;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-content: center;
    height: 180px;
    width: 180px;
    border-radius: 20px;
    background-color: ${props => props.color};
    transition: 0.3s;
    font-weight: 500;
    font-size: 25px;
    text-align: center;
    color:#f3f1f1;
    margin-left: 20px;
    margin-right: 20px;
    &:hover{
        height: 200px;
        width: 200px; 
        font-size: 28px;

    }
`

export const SelectionBox = ({text, color, route}) => {
    const routeHook = useHistory();
    
    const changeRoute = () => {
        routeHook.push(route);
    }
    return (
        <Container color={color} onClick={()=>changeRoute()}>
            {text}
        </Container>
    )
}


export default SelectionBox;
