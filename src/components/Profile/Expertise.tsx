import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import { Edit3, Save } from 'react-feather';
import Select from './Select';

const SelectsWrapper = styled.form`
   padding: 20px 10px;
   position: relative;
   border-bottom: 1px solid ${Colors.lightgrey};
`;

const SelectSection = styled.section`
   display: flex;
   flex-direction: column;
   margin-bottom: 20px;

   label {
      color: ${Colors.grey};
      margin-bottom: 8px;
   }

   select:disabled,
   select {
      /* width: 20%; */

      border: 1px solid ${Colors.darkblue};
      border-radius: 5px;
      background-color: ${Colors.lightblue};
      color: ${Colors.blue};
      padding: 4px 30px 4px 10px;
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
`;
const EditControls = styled.div`
   position: absolute;
   top: 20px;
   right: 30px;
   cursor: pointer;
`;

export interface ExpertiseProps {}

const Expertise: React.FC<ExpertiseProps> = () => {
   const [isEditingSelect, setIsEditingSelect] = useState(false);

   const selectsRef = useRef<HTMLFormElement>(null);

   const optionsExpertise = [
      { key: 'Mergers and acqusition', value: 'Mergers and acqusition' },
      { key: 'Mergers and acqusition', value: 'fas' },
      { key: 'Mergers and acqusition', value: 'gsad' },
   ];
   const optionsSpecialities = [
      { key: 'Cross border operation', value: 'Cross border operation' },
      { key: 'Transaction over 500M$', value: 'Transaction over 500M$' },
      { key: 'Cross border operation', value: 'Cross border operation2' },
   ];
   const optionsAdmission = [
      { key: 'Paris bar association', value: 'Paris bar association' },
      { key: 'Tunisian bar association', value: 'Tunisian bar association' },
      { key: 'Poland bar association', value: 'Poland bar association' },
   ];
   const optionsCountries = [
      { key: 'Tunisia', value: 'Tunisia' },
      { key: 'Poland', value: 'Poland' },
      { key: 'France', value: 'France' },
   ];

   const editSelects = () => {
      if (selectsRef && selectsRef.current) {
         console.log(selectsRef);
         (selectsRef.current[0] as HTMLSelectElement).disabled = isEditingSelect;
         (selectsRef.current[1] as HTMLSelectElement).disabled = isEditingSelect;
         (selectsRef.current[2] as HTMLSelectElement).disabled = isEditingSelect;
         (selectsRef.current[3] as HTMLSelectElement).disabled = isEditingSelect;
         (selectsRef.current[4] as HTMLSelectElement).disabled = isEditingSelect;
         (selectsRef.current[5] as HTMLSelectElement).disabled = isEditingSelect;
      }
      setIsEditingSelect(!isEditingSelect);
   };
   return (
      <Formik
         initialValues={{
            expertise: '',
            specialities: '',
            admission: '',
            countries: '',
         }}
         onSubmit={() => {}}
      >
         <SelectsWrapper ref={selectsRef}>
            <SelectSection>
               <label>Expertise</label>
               <div>
                  <Select options={optionsExpertise} selectName="expertise"></Select>
               </div>
            </SelectSection>
            <SelectSection>
               <label>Specialities</label>
               <div>
                  <Select options={optionsSpecialities} selectName="specialities"></Select>
                  <Select options={optionsSpecialities} selectName="specialities"></Select>
               </div>
            </SelectSection>
            <SelectSection>
               <label>Admission to practice law</label>
               <div>
                  <Select options={optionsAdmission} selectName="admission"></Select>
                  <Select options={optionsAdmission} selectName="admission"></Select>
               </div>
            </SelectSection>
            <SelectSection>
               <label>Countries</label>
               <div>
                  <Select options={optionsCountries} selectName="countries"></Select>
               </div>
            </SelectSection>
            <EditControls>
               {isEditingSelect ? (
                  <Save onClick={editSelects} size={24} color="black" />
               ) : (
                  <Edit3 onClick={editSelects} size={24} color="black" />
               )}
            </EditControls>
         </SelectsWrapper>
      </Formik>
   );
};

export default Expertise;
