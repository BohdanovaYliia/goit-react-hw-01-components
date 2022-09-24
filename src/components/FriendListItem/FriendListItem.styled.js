import styled from 'styled-components';

export const Friend = styled.li`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 10px;
    /* gap: 30px; */
    margin-top: 10px;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.3);
`;

export const Status = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props =>
        props.online ? "green" : "red"};
`;

export const Avatar = styled.img`
    width: 50px;
    margin-left: 50px;
`;

export const Name = styled.p`
    margin-left: 60px;
`;