import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #aaaa; 
    
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #CACACA;
    width: 360px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    
`



export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`




export const Row = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export const Display = styled.div`
    background-color: #3A3B3C;
    color: #CC0000;
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    padding: 20px;
    text-align: right;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
`



