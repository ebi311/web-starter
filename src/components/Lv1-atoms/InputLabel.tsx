import React from 'react';
import { styled } from '../Theme';

const Label = styled.label`
  font-weight: bold;
  font-size: ${p => p.theme.fontSize * 0.8}px;
`;

const InputLabel: React.FC = props => {
  return <Label>{props.children}</Label>;
};

export default InputLabel;
