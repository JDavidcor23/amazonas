import styled from "styled-components";
import { Link } from "react-router-dom";
export const ContainerPrice = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
`
export const Moneda = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
    position: absolute;
    left: 0px;
`
export const Cero = styled.span`
    font-size: 0.8rem;
    position: absolute;
    left: 52px;
`
export const LinkCards = styled(Link)`
    text-decoration: none;
    color: black;
    width: 30%;
    margin: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    &:hover{
        color: black;
    }
    @media screen and (max-width: 600px) {
        width: 44%;
    }
`