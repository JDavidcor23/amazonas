import styled from 'styled-components'

export const Nav = styled.nav`
    background: #131921;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    width: 100%;
    justify-content: center;
    margin:0 auto;
  }
    `
export const Ul = styled.nav`
    width: 100%;
    display: flex;
    padding: 0;
    color: white;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0 20px 0;
    align-items: center;
`
export const Li = styled.li`
    list-style: none;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
export const LiInput = styled.li`
    list-style: none;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
     @media screen and (max-width: 870px) {
        display: none;
    } 
    
    `

export const Span = styled.span`
    position: absolute;
    top: -20px;
    right: 8px;
    color: #f08804;
    font-weight: bold;
    font-size: 1.1rem;  
    @media screen and (max-width: 600px) {
        right: 4px;
    } 
    `
export const Logo = styled.img`
    width: 110px;
    height: 40px;
    object-fit: contain;
    @media screen and (max-width: 600px) {
        width: 80px;
    }
    `
export const Button = styled.button`
    height: 28px;
    border: none;
    width: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #febd69;
    `
export const InputSearch = styled.input`
    height: 30px;
    padding: 10px;
    font-size:1.2rem;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
`





// searchInput responsive //

export const LiResp = styled.li`
    display: none; 
@media screen and (max-width: 870px) {
    list-style: none;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
`
export const Form = styled.form`

    width: 100%;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;

`
export const ButtonResp = styled.button`
    height: 32px;
    width: 10%;
    margin: 1px 0 0 0;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #febd69;
    background: "#febd69";
`
