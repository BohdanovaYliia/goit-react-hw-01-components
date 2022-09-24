import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Friend>
        <Status online = {isOnline}></Status>
        <Avatar
            src={avatar}
            alt="User avatar"
        />
        <Name>{name}</Name>
        </Friend>
    );
};