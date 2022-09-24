import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsContainer>
            {friends.map(({ avatar, name, isOnline, id }) =>
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            )}
        </FriendsContainer>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
    ).isRequired,
};