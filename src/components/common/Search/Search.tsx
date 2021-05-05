import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   align-items: center;
`;

interface SearchInputProps {
   width: string;
}

const SearchInput = styled.input<SearchInputProps>`
   text-align: center;
   width: ${(props) => props.width};
   padding: 8px;
   padding-right: 30px;
   border: 1px solid #ddd;
`;

const Loupe = styled.img`
   position: relative;
   left: -25px;
   cursor: pointer;
`;

export interface SearchProps {
   placeholder: string;
   width: string;
}

const Search: FC<SearchProps> = ({ placeholder, width }) => {
   return (
      <Wrapper>
         <SearchInput width={width} placeholder={placeholder} />
         <Loupe src="./icons/search.png" alt="" />
      </Wrapper>
   );
};

export default Search;
