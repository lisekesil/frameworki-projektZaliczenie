import React from 'react';
import styled from 'styled-components';

const NavPage = styled.nav`
   margin: auto;
   display: flex;
`;

const Page = styled.div`
   margin: 3px;
   cursor: pointer;
`;

export interface PaginationProps {
   perPage: number;
   total: number;
   paginate: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ perPage, total, paginate }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(total / perPage); i++) {
      pageNumbers.push(i);
   }
   return (
      <NavPage>
         {pageNumbers.map((number) => (
            <Page onClick={() => paginate(number)} key={number}>
               {number}
            </Page>
         ))}
      </NavPage>
   );
};

export default Pagination;
