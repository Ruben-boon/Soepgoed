import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface SliderInputProps {
  type: string;
  value: number;
  readOnly: boolean;
  onChange: (value: number) => void;
}

const SliderInput: React.FC<SliderInputProps> = ({ value, readOnly, onChange }) => {
  return (
    <Slider
      min={0}
      max={100}
      value={value}
      // @ts-ignore
      onChange={onChange}
      disabled={readOnly}
    />
  );
};

export default SliderInput;
