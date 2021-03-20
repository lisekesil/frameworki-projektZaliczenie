import React, { FC } from 'react';
import styled from 'styled-components';

export interface SearchProps {}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  text-align: center;
  width: 300px;
  padding: 8px;
  border: 1px solid #ddd;
`;

const Loupe = styled.img`
  position: relative;
  left: -25px;
`;

const Search: FC = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="Search Legalcluster" />
      <Loupe src="./icons/search.png" alt="" />
    </Wrapper>
  );
};

export default Search;
