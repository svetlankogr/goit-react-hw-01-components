import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 700px;
  background-color: white;
  text-align: center;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const THead = styled.thead`
  color: white;
  background-color: #15653dcb;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;
  border: grey;
  color: white;
`;

export const Tr = styled.tr`
  background-color: #00bbff85;
  &:nth-child(even) {
    background-color: #ffff0071;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border: grey;
  color: black;
`;
