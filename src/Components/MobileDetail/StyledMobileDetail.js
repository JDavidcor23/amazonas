import styled from "styled-components";

export const ConatinerMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 751px) {
        display: none;
    }
`