import React from 'react';
import styled from 'styled-components';

const SelectField = styled.select``;

export interface SelectProps {
   selectName: string;
   options: {
      key: string;
      value: string;
   }[];
   isDisabled?: boolean;
}

const Select: React.FC<SelectProps> = ({ selectName, options, isDisabled, ...rest }) => {
   return (
      <SelectField as="select" name={selectName} {...rest} disabled={isDisabled ? false : true}>
         {options.map((option) => {
            return (
               <option key={option.value} value={option.value}>
                  {option.key}
               </option>
            );
         })}
      </SelectField>
   );
};

export default Select;
