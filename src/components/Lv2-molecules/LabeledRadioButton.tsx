import React from 'react';
import InputLabel from '../Lv1-atoms/InputLabel';
import RadioButton from '../Lv1-atoms/RadioButton';
import { styled } from '../Theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

interface IProps {
  className?: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
  name: string;
  selectItems: {
    label: string;
    value: string;
  }[];
}

// eslint-disable-next-line require-jsdoc
const LabeledRadioButton: React.FC<IProps> = props => {
  return (
    <Container className={props.className}>
      <InputLabel>{props.label}</InputLabel>
      <RadioButton
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        selectItems={props.selectItems}
      />
    </Container>
  );
};

export default LabeledRadioButton;
