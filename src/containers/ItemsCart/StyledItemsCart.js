import styled from "styled-components";

export const ContainerItems = styled.div`
    display: flex;
    width:90%;
    flex-direction: column;
    margin:0 auto;
    @media screen and (min-width: 700px) {
        flex-direction: row-reverse;
        justify-content:center;
    }
    `
export const ContainerP = styled.div`
     margin-top:20px;    
     display:flex;
     align-items:center;
     flex-direction:column;
     font-size: 1.5rem; 
     text-align: center;
     height:200px;
     @media screen and (min-width: 700px) {
        font-size:1.2rem;
        position:fixed;
        right:15px;
        padding: 20px;
     }
     `
export const ButtonProcesar = styled.button`
     margin: 10px 0;
     cursor:pointer;
     width: 85%;
     border-radius: 20px;
     background: #ffa41c;
     padding: 10px;
     border:none;
     font-size: 1.4rem; 
     @media screen and (min-width: 700px) {
         font-size:1rem
     }
     `
export const ContainerItemsP = styled.div`
    display: flex;
    margin:20px 0;
    padding: 20px 0;
    border-top:2px solid #e0e0e0;
    border-bottom:2px solid #e0e0e0;
    flex-direction: column;
    @media screen and (min-width: 700px) {
         width: 60%;
     }
`
export const ButtonDelete = styled.button`
    margin: 10px 0;
    padding: 5px;
    background: red;
    border: none;
    border-radius: 10px;
    color:white;
    cursor:pointer;
    font-size: 1.1rem;
`
export const ImgCart = styled.img`
    max-width: 250px;
`