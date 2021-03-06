import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    height: 100px;
    width: 100vw;
    /* Aqui */
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .3), rgba(10, 10, 10, 0));
    color: white;

    nav {
        display: flex;
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
        padding-top: 20px;
    }

    h1 {
        margin-top: 2px;
        font-size: 45px;
    }

    ul {
        display: flex;
        list-style: none;
        margin-left: auto;
        right: 0;
    }

    li {
        margin-top: 0px;
        cursor: pointer;
        border-radius: 15px;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 13px;
        padding-bottom: 14px;
        transition: .2s all;

        :hover {
            background-color: rgba(255,255,255,.084);
            box-shadow: 0px 0px 40px rgba(255,255,255,.2);
        }
    }

    button {
        margin-left: 35px;
        right: 0;
    }
`;

export const TelaBranca = styled.div`
    position: fixed;

    height: 100vh;
    width: 100vw;

    left: 0;
    margin-top: -150vh;

    background-color: rgba(255,255,255,.3);
    transition: none;

`;

export const ExpBotao = styled.div`
    height: 0px;
    width: 170px;
    border-radius: 22px;
    
    position: fixed;
    right: 10vw;
    margin-top: 0px;

    box-shadow: 2px 0px 30px rgba(0,0,0,.3);
    background-color: rgb(255,255,255);

    transition: .2s all;
`;