import React, { Ref, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import Select from './Select';

const Tb = styled.table`
   width: 90%;
   margin: 20px auto;

   select:disabled,
   select {
      border: none;
      color: ${Colors.darkblue};
      margin-right: 10px;
      font-size: ${fontSize[16]};
      opacity: 1;
   }

   select:disabled {
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
   }

   input:disabled {
      opacity: 1;
      border: none;
      background-color: transparent;
      text-align: center;
      color: ${Colors.darkblue};
      font-size: ${fontSize[16]};
      /* padding-left: 50px; */
   }
`;

const TrHead = styled.tr`
   border-bottom: 1px solid ${Colors.darkblue};

   th {
      padding-bottom: 10px;
      font-weight: 700;
      color: ${Colors.darkblue};
   }
`;

const Td = styled.td`
   text-align: center;
   padding: 3px;
`;

export interface TableProps {
   content: {
      name: string;
      options: {
         key: string;
         value: string;
      }[];
   }[];
   isDate?: boolean;
   myRef?: Ref<HTMLTableSectionElement>;
}

const Table: React.FC<TableProps> = ({ content, isDate, myRef }) => {
   const [date1, setDate1] = useState('2021-12-12');
   const [date2, setDate2] = useState('2021-12-12');
   const [date3, setDate3] = useState('2021-12-12');

   return (
      <Tb>
         <thead>
            <TrHead>
               {content.map((h) => (
                  <th key={h.name}>{h.name}</th>
               ))}
               {isDate && <th>Date</th>}
            </TrHead>
         </thead>

         <tbody ref={myRef}>
            <tr>
               {content.map((c) => (
                  <Td key={c.name}>
                     <Select options={c.options} selectName="name" />
                  </Td>
               ))}
               {isDate && (
                  <Td>
                     <input
                        disabled
                        type="date"
                        value={date1}
                        onChange={(e) => setDate1(e.target.value)}
                     />
                  </Td>
               )}
            </tr>
            <tr>
               {content.map((c) => (
                  <Td key={c.name}>
                     <Select options={c.options} selectName="name" />
                  </Td>
               ))}
               {isDate && (
                  <Td>
                     <input
                        disabled
                        type="date"
                        value={date2}
                        onChange={(e) => setDate2(e.target.value)}
                     />
                  </Td>
               )}
            </tr>
            <tr>
               {content.map((c) => (
                  <Td key={c.name}>
                     <Select options={c.options} selectName="name" />
                  </Td>
               ))}
               {isDate && (
                  <Td>
                     <input
                        disabled
                        type="date"
                        value={date3}
                        onChange={(e) => setDate3(e.target.value)}
                     />
                  </Td>
               )}
            </tr>
         </tbody>
      </Tb>
   );
};

export default Table;
