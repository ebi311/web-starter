import React, { useCallback } from 'react';
import { styled } from '../Theme';
import TextBox from '../Lv1-atoms/TextBox';
import InputLabel from '../Lv1-atoms/InputLabel';

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
}

const LabeledTetBox: React.FC<IProps> = props => {
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  }, []);
  const onBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  }, []);
  return (
    <Container className={props.className}>
      <InputLabel>{props.label}</InputLabel>
      <TextBox value={props.value} onChange={onChange} onBlur={onBlur} />
    </Container>
  );
};

export default LabeledTetBox;
