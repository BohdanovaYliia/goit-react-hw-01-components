import PropTypes from 'prop-types';
import {
  Card, Wrap, Avatar, Title, Text,
  StatsList, StatsListItem, StatsLabel, StatsQuantity
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
   }) => {
  return (
    <Card>
  <Wrap>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Title>{username}</Title>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </Wrap>

  <StatsList>
    <StatsListItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </StatsListItem>
    <StatsListItem>
      <StatsLabel>Views</StatsLabel>
      <StatsQuantity>{stats.views}</StatsQuantity>
    </StatsListItem>
    <StatsListItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity>{stats.likes}</StatsQuantity>
    </StatsListItem>
  </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};