import React from 'react';
import styled from 'styled-components';
import { X, Plus } from 'react-feather';
import { Colors } from '../../../styledHelpers/Colors';
import Icons from '../../../components/Icon/Icons.enum';
import Icon from '../../../components/Icon/Icon';

const Container = styled.section`
   padding: 10px;

   h5 {
      color: ${Colors.grey};
      margin-bottom: 10px;
   }
`;

const Row = styled.div`
   display: flex;
   margin: 5px;
`;

const RowItem = styled.div`
   display: flex;
   align-items: center;
   padding: 5px;
   color: ${Colors.darkgrey};

   img {
      margin: 0 20px 0 10px;
   }

   p {
      width: 80px;
      margin-left: 10px;
   }
`;

const InputDisabled = styled.input`
   height: 30px;
   border: 1px solid ${Colors.lightgrey};
   margin-right: 10px;
   padding-left: 10px;
   &::placeholder {
      color: ${Colors.grey};
   }
`;

export interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
   return (
      <Container>
         <h5>Rows are filtered by the following conditions starting from the top</h5>
         <Row>
            <RowItem>
               <X /> <p>Where</p>
            </RowItem>
            <RowItem>
               Company <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <RowItem>
               Contains <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <InputDisabled disabled placeholder="Type" />
         </Row>
         <Row>
            <RowItem>
               <X /> <p>Where</p>
            </RowItem>
            <RowItem>
               Status <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <RowItem>
               Is <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <InputDisabled disabled placeholder="Type" />
            <RowItem>
               In <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <InputDisabled disabled placeholder="Entity" />
         </Row>
         <Row>
            <RowItem>
               <X /> <p>Where</p>
            </RowItem>
            <RowItem>
               Status <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <RowItem>
               Ends before <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <InputDisabled disabled placeholder="Type" />
            <RowItem>
               In <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
            <InputDisabled disabled placeholder="Entity" />
         </Row>
         <Row>
            <RowItem>
               <Plus /> <p>Add filter</p>
            </RowItem>
            <RowItem>
               choose property <Icon imgSrc={Icons.arrowDown} width="8px" height="8px" />
            </RowItem>
         </Row>
      </Container>
   );
};

export default Filters;
