import React from 'react';
import { Button, Li } from '../../styles';
import { Header } from './style';

const TopBar = () => {
    return(
        <Header>
            <nav>
                <h1>Empresa</h1>
                <ul>
                    <Li Cor="purple" onClick={()=>{mudarCor('Home')}} >Home</Li>
                    <Li Cor="orange" onClick={()=>{mudarCor('Sobre')}} >Sobre</Li>
                    <Li Cor="green" onClick={()=>{mudarCor('Port')}} >Portifólio</Li>
                    <Li Cor="blue" onClick={()=>{mudarCor('Repos')}} >Repositórios</Li>
                    <Li Cor="black" onClick={()=>{mudarCor('Links')}} >Links</Li>
                </ul>
                <Button Color="rgb(30, 0, 90)">Contato</Button>
            </nav>
        </Header>
    );
}

function mudarCor(id) {
    switch(id) {
        case 'Home':
            document.querySelector('body').style.marginTop = '0vh';
            break;
        case 'Sobre':
            document.querySelector('body').style.marginTop = '-100vh';
            break;
        case 'Port':
            document.querySelector('body').style.marginTop = '-200vh';
            break;
        case 'Repos':
            document.querySelector('body').style.marginTop = '-300vh';
            break;
        case 'Links':
            document.querySelector('body').style.marginTop = '-400vh';
            break;
        default: 
            break;
    }
}

export default TopBar;