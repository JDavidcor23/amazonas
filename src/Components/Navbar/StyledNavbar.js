import styled from 'styled-components'

export const Nav = styled.nav`
    background: #131921;
    display: flex;
    padding: 20px 0;
    width: 100%;
    justify-content: center;
    margin:0 auto;
    `
export const Ul = styled.nav`
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    color: white;
    align-items: center;
`
export const Li = styled.li`
    list-style: none;
`
export const LiCarrito = styled.li`
    list-style: none;
    position: relative;
`
export const Span = styled.span`
    position: absolute;
    top: -20px;
    right: 8px;
    color: #f08804;
    font-weight: bold;
    font-size: 1.1rem;  
`
export const Logo = styled.img`
    width: 110px;
    height: 40px;
    object-fit: contain;
`
export const SelectOption = styled.select`
    height: 30px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`
export const Button = styled.button`
    height: 30px;
    border: none;
    width: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #febd69;
`
export const InputSearch = styled.input`
    height: 30px;
`