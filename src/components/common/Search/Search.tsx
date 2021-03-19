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
`;

const Search: FC = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="Search Legalcluster" />
      <img src="./icons/search.png" alt="" />
    </Wrapper>
  );
};

export default Search;
