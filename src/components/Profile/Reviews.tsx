import React, { useRef, useState } from 'react';
import Table from './Table';
import styled from 'styled-components';
import { Edit3, Save } from 'react-feather';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.section`
   padding: 20px 10px;
   position: relative;
   border-bottom: 1px solid ${Colors.lightgrey};
   color: ${Colors.darkblue};

   h3 {
      font-weight: 700;
      margin-bottom: 30px;
   }
`;

const EditControls = styled.div`
   position: absolute;
   top: 20px;
   right: 30px;
   cursor: pointer;
`;

export interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {
   const [isEdit, setIsEdit] = useState(false);
   const tableRef = useRef<HTMLTableSectionElement>(null);

   const content = [
      {
         name: 'Name',
         options: [
            {
               key: 'Jill',
               value: 'Jill',
            },
            {
               key: 'Will',
               value: 'Will',
            },
         ],
      },
      {
         name: 'Entity',
         options: [
            {
               key: 'Audi',
               value: 'Audi',
            },
            {
               key: 'BMW',
               value: 'BMW',
            },
         ],
      },
      {
         name: 'Location',
         options: [
            {
               key: 'France',
               value: 'France',
            },
            {
               key: 'Poland',
               value: 'Poland',
            },
         ],
      },
      {
         name: 'Expertise',
         options: [
            {
               key: 'PEP8',
               value: 'PEP8',
            },
            {
               key: 'PEP257',
               value: 'PEP257',
            },
         ],
      },
   ];

   const editTable = () => {
      if (tableRef && tableRef.current) {
         const inputs = tableRef.current.querySelectorAll('select');
         inputs.forEach((i) => (i.disabled = isEdit));

         const dataInput = tableRef.current.querySelectorAll('input');
         dataInput.forEach((d) => (d.disabled = isEdit));
      }
      setIsEdit(!isEdit);
   };

   return (
      <Wrapper>
         <h3>Internal reviews</h3>
         <Table myRef={tableRef} content={content} isDate />
         <EditControls>
            {isEdit ? (
               <Save onClick={editTable} size={24} color="black" />
            ) : (
               <Edit3 onClick={editTable} size={24} color="black" />
            )}
         </EditControls>
      </Wrapper>
   );
};

export default Reviews;
