import styled from 'styled-components';

export const CenterSection = styled.section`
    height: 100vh;
    background-color: ${props => `${props.BGC}`};

    div {
        width: 80vw;
        max-width: 1536px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

//DEPOIS DAQUI, PARA DE VOLTAR
export const Button = styled.button`
    height: 44px;
    border-radius: 22px;
    padding: 0.5rem 1rem;
    border: solid 3px white;
    font-size: 20px;
    font-weight: bold;
    background-color: ${props => `${props.BGC}`};
    color: ${props => `${props.Color}`};
    border: none;
    cursor: pointer;
    transition: all .2s ease 0s;

    :hover {
        box-shadow: 0px 1px 7px rgb(255,255,255);
    }
`;

export const Li = styled.li`
    
    :hover {
        color: ${props => `${props.Cor}`};
    }
`;

