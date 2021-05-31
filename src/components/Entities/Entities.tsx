import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
   display: flex;
   flex-direction: column;

   width: 850px;
`;

export interface EntitiesProps {}

const Entities: React.FC<EntitiesProps> = () => {
   return (
      <Wrapper>
         <h1>Entities</h1>
      </Wrapper>
   );
};

export default Entities;
