import styled from 'styled-components';
import { getRandomHexColor } from "utils/GetRandomColor";

export const Container = styled.section`
    width: 400px;
    padding: 60px;
    margin: 20px auto;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    background-color: lightgrey;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 20px 10px;
    background-color: white;
`;

export const StatList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100% / 5);
    text-align: center;
    padding: 5px;
    background-color: ${getRandomHexColor};
`;

export const StatsLabel = styled.span`
    color: white;
`;

export const StatsQuantity = styled.span`
    margin-top: 10px;
    color: white;
    font-weight: bold;
`;