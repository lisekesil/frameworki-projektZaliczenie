import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const NavPage = styled.nav`
   margin: auto;
   display: flex;
   justify-content: center;
   color: ${Colors.blue};

   button {
      border: none;
      background-color: transparent;
      color: ${Colors.blue};
      margin: 0 5px;
      text-transform: uppercase;
      cursor: pointer;
   }
`;

const Page = styled.div`
   margin: 0 3px;
   cursor: pointer;
`;
const CurentPage = styled.div`
   margin: 0 3px;
   font-weight: 700;
   font-size: ${fontSize[18]};
`;

export interface PaginationProps {
   perPage: number;
   total: number;
   curPage: number;
   paginate: (page: number) => void;
   next: () => void;
   prev: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
   perPage,
   total,
   curPage,
   prev,
   next,
   paginate,
}) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(total / perPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <NavPage>
         {curPage > 1 && <button onClick={prev}>prev</button>}
         {pageNumbers.map((number, index) => {
            if (index + 1 === curPage) {
               return (
                  <CurentPage onClick={() => paginate(number)} key={number}>
                     {number}
                  </CurentPage>
               );
            }
            if (index < 3 || index > pageNumbers.length - 2) {
               return (
                  <Page onClick={() => paginate(number)} key={number}>
                     {number}
                  </Page>
               );
            } else if (index === 4) {
               return '...';
            } else {
               return '';
            }
         })}
         {curPage + 1 <= Math.ceil(total / perPage) && <button onClick={next}>next</button>}
      </NavPage>
   );
};

export default Pagination;
