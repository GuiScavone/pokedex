import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
  margin: auto;
`;

export const SearchBar = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 30px 0 0 30px;
`;

export const SearchBarButton = styled.button`
  border-radius: 30px;
  padding: 12.5px 20px;
  background-color: #d6dad6;
  color: #7e7a7a;
  font-weight: Bold;
`;
