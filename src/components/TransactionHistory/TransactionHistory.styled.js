import styled from 'styled-components';

export const Table = styled.table`
    margin: 20px auto;
    padding: 0;
    border: 3px black solid;
    border-collapse: collapse;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.3);
`;

export const TableHeadContainer = styled.thead`
    padding: 0;
    color: white;
    background-color: grey;
`;

export const TableHead = styled.tr`

`;

export const TableHeadItem = styled.th`
    padding: 20px;
    border: 2px black solid;
`;

export const TableBody = styled.tbody`

`;

export const TableBodyLine = styled.tr`

`;

export const TableBodyText = styled.td`
    padding: 20px;
    text-align: center;
    border: 1px black solid;
    color: grey;
    /* background-color: lightgrey; */
`;
