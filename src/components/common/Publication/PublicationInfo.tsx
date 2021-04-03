import React, { FC } from 'react';
import styled from 'styled-components';

export interface PublicationInfoProps {}

const PublicationInfo: React.FC<PublicationInfoProps> = () => {
   return (
      <div>
         <span>7 Jan 2020</span>
         <img src="" alt="" />
         <span>John Doe</span>
      </div>
   );
};

export default PublicationInfo;
