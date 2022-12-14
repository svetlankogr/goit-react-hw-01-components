import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 250px;
  margin: 20px auto;
  border: 1px solid black;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;
export const DescriptionBlock = styled.div`
  margin: 15px auto;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 100px;
  height: auto;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const Tag = styled.p`
  color: grey;
  margin-bottom: 5px;
  font-size: 16px;
  text-align: center;
`;

export const Location = styled.p`
  color: grey;
  font-size: 16px;
  text-align: center;
`;

export const Stats = styled.ul`
  background-color: #bab9b9;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
  width: 33%;
  gap: 5px;
`;

export const Label = styled.span`
  color: #474343;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
