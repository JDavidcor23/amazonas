import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    min-width: 280px;
    width: 350px;
    margin: 20px 0;
    `
export const BottonInput = styled.button`
    border-radius: 5px;
    background: #f0c14b;
    padding: 5px;
    border-color:  #a88734 #9c7e31 #846a29;
`
export const LinearDiv = styled.div`
    height: 44px;
    margin-top:20px;
    background: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
    background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
    zoom: 1;
    z-index: 0;
`