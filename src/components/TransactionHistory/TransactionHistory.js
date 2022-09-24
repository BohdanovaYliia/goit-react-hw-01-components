import PropTypes from 'prop-types';
import {
    Table, TableHeadContainer, TableHead, TableHeadItem,
TableBody, TableBodyLine, TableBodyText } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
        <TableHeadContainer>
            <TableHead>
                <TableHeadItem>Type</TableHeadItem>
                <TableHeadItem>Amount</TableHeadItem>
                <TableHeadItem>Currency</TableHeadItem>
            </TableHead>
        </TableHeadContainer>

        <TableBody>
            {items.map(({type, amount, currency, id}) =>
                <TableBodyLine key={id}>
                    <TableBodyText>{type}</TableBodyText>
                    <TableBodyText>{amount}</TableBodyText>
                    <TableBodyText>{currency}</TableBodyText>
                </TableBodyLine>)
            }
        </TableBody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })
    ).isRequired,
};
