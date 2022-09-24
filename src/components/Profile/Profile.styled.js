import styled from 'styled-components';

export const Card = styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 2px black solid;
    border-radius: 5px;
    box-sizing: border-box;
`;

export const Wrap = styled.div`
    text-align: center;
`;

export const Avatar = styled.img`
    width: 100px;
    border: 2px black solid;
    border-radius: 50%;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.p`
    color: black;
    font-size: 24px;
    font-weight: 700;
`;

export const Text = styled.p`
    color: grey;
    font-size: 18px;
`;

export const StatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

export const StatsListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    text-align: center;
    padding: 5px;
    border: 1px solid black;
    background-color: lightgrey; 
`;

export const StatsLabel = styled.span`
    color: red;
`;

export const StatsQuantity = styled.span`
    margin-top: 10px;
    font-weight: bold;
`;