import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkCards = styled(Link)`
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
    width: 260px;
    text-decoration:none;
    margin: 10px 10px;
    cursor: pointer;
    background: white;
    height: auto;
    padding: 10px;
    color: #f08804;
    &:hover{
        color:#a65f04;
    }
`