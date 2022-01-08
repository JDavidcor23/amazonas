import styled from "styled-components";

export const DesktopDiv = styled.div`
    display: flex; 
    width: 90%;
    align-items: flex-start;
    margin-top:20px;
    @media screen and (max-width: 750px) {
        display: none;
    }
`
export const Images = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0 20px 0 0;
`
export const ImgSelect = styled.img`
    width: 70px;
    cursor:pointer;
    &:hover{
        box-shadow: -3px -2px 18px 1px rgba(255,164,28,0.58);
    }
` 
export const ContainerImages = styled.div`
    width: 80%; 
    display: flex; 
    margin-top:10px;
    justify-content: space-around;
`