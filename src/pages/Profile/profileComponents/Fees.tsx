import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import Select from './Select';
import { Edit3, Save } from 'react-feather';
import { Formik, Field } from 'formik';

const Wrapper = styled.section`
   padding: 20px 10px;
   position: relative;
   color: ${Colors.darkblue};

   h3 {
      font-weight: 700;
      margin-bottom: 30px;
   }
`;

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
      padding-bottom: 10px;
      font-weight: 700;
      color: ${Colors.darkblue};
   }
`;
const Td = styled.td`
   text-align: start;
   padding: 3px;
`;

const EditControls = styled.div`
   position: absolute;
   top: 20px;
   right: 30px;
   cursor: pointer;
`;

export interface FeesProps {}

const Fees: React.FC<FeesProps> = () => {
   const [isEditing, setIsEditing] = useState(false);

   const years = [
      {
         key: '2021',
         value: '2021',
      },
      {
         key: '2020',
         value: '2020',
      },
      {
         key: '2019',
         value: '2019',
      },
      {
         key: '2018',
         value: '2018',
      },
      {
         key: '2017',
         value: '2017',
      },
      {
         key: '2016',
         value: '2016',
      },
      {
         key: '2015',
         value: '2015',
      },
      {
         key: '2014',
         value: '2014',
      },
      {
         key: '2013',
         value: '2013',
      },
      {
         key: '2012',
         value: '2012',
      },
      {
         key: '2011',
         value: '2011',
      },
      {
         key: '2010',
         value: '2010',
      },
      {
         key: '2009',
         value: '2009',
      },
   ];

   const editFees = () => {
      setIsEditing(!isEditing);
   };
   return (
      <Wrapper>
         <h3>Amount of fees</h3>
         <Formik
            initialValues={{
               center0: 'CS 153',
               center1: 'CS 21',
               center2: 'CS 32',
               center3: 'CS 132',
               center4: 'CS 76',

               amount0: '4 500$',
               amount1: '13 222$',
               amount2: '1 500$',
               amount3: '18 200$',
               amount4: '21 150$',

               firm0: 'Clifford chance',
               firm1: 'Linklasters',
               firm2: 'Stonks',
               firm3: 'Motofox',
               firm4: 'Linklasters',
            }}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            <Tb>
               <thead>
                  <TrHead>
                     <th>Year</th>
                     <th>Cost center</th>
                     <th>Total amount</th>
                     <th>Law firm</th>
                  </TrHead>
               </thead>
               <tbody>
                  <tr>
                     <Td>
                        <Select options={years} selectName="name" isDisabled={isEditing} />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="center0" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="amount0" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="firm0" />
                     </Td>
                  </tr>
                  <tr>
                     <Td>
                        <Select options={years} selectName="name" isDisabled={isEditing} />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="center1" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="amount1" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="firm1" />
                     </Td>
                  </tr>
                  <tr>
                     <Td>
                        <Select options={years} selectName="name" isDisabled={isEditing} />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="center2" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="amount2" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="firm2" />
                     </Td>
                  </tr>
                  <tr>
                     <Td>
                        <Select options={years} selectName="name" isDisabled={isEditing} />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="center3" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="amount3" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="firm3" />
                     </Td>
                  </tr>
                  <tr>
                     <Td>
                        <Select options={years} selectName="name" isDisabled={isEditing} />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="center4" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="amount4" />
                     </Td>
                     <Td>
                        <Field type="text" disabled={!isEditing} name="firm4" />
                     </Td>
                  </tr>
               </tbody>
            </Tb>
         </Formik>
         <EditControls>
            {isEditing ? (
               <Save onClick={editFees} size={24} color="black" />
            ) : (
               <Edit3 onClick={editFees} size={24} color="black" />
            )}
         </EditControls>
      </Wrapper>
   );
};

export default Fees;
