import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #79928a43;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ onlineStatus }) => (onlineStatus ? 'green' : 'red')};
`;

export const FriendName = styled.span`
  font-size: 24px;
  color: #053124;
`;
