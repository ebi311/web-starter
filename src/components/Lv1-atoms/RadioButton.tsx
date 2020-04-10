import React, { useMemo, useCallback, ChangeEvent } from 'react';
import { styled } from '../Theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IProps {
  className?: string;
  name: string;
  selectItems: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
  value: string;
}

const RadioButton: React.FC<IProps> = props => {
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!props.onChange) return;
    if (e.currentTarget.checked) {
      props.onChange(e.currentTarget.value);
    }
  }, []);
  const selectItems = useMemo(() => {
    return props.selectItems.map(i => (
      <label key={i.value}>
        <input
          type="radio"
          name={props.name}
          value={i.value}
          onChange={onChange}
          checked={props.value === i.value}
        />
        {i.label}
      </label>
    ));
  }, [props.selectItems, props.value]);
  return <Container className={props.className}>{selectItems}</Container>;
};

export default RadioButton;
