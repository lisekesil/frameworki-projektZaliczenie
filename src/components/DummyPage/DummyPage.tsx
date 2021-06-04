import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
   margin: auto;
   font-weight: 700;
`;

export interface DummyPageProps {}

const DummyPage: React.FC<DummyPageProps> = () => {
   return <Header>Dummy Page</Header>;
};

export default DummyPage;
