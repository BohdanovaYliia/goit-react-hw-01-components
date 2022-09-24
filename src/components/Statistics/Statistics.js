import PropTypes from 'prop-types';
import {
    Container, Title, StatList,
    StatListItem, StatsLabel, StatsQuantity
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Container>
        {title ? <Title>{ title }</Title> : ''}

        <StatList>
        {stats.map(({id, label, percentage}) =>
            <StatListItem key={id}>
                <StatsLabel>{label}</StatsLabel>
                <StatsQuantity>{percentage}%</StatsQuantity>
            </StatListItem>)}
       </StatList>
        </Container>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
};