import React from 'react';
import { styled } from '../Theme';

const Input = styled.input`
  border: 1px solid ${p => p.theme.surface};
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  padding: 0.25em;
`;

const TextBox: React.FC<React.InputHTMLAttributes<
  HTMLInputElement
>> = props => {
  return <Input {...props} type="text" />;
};

export default TextBox;
