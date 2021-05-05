import * as React from 'react';
import styled from 'styled-components';
import Icons from './Icons.enum';

interface ImgProps {
   width: string;
   height: string;
}

const Img = styled.img<ImgProps>`
   width: ${(p) => p.width};
   height: ${(p) => p.height};
`;

interface IconProps {
   imgSrc: Icons;
}

const Icon: React.FC<ImgProps & IconProps> = ({ width, height, imgSrc }) => {
   return <Img width={width} height={height} src={imgSrc} />;
};

export default Icon;
