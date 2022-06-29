import React from 'react';
import StyledInputProps from 'types/components/StyledInputProps';
import { OutlinedInput } from './styles';

const StyledInput = (props: StyledInputProps) => {
    const { id, name, value, placeholder, height, width, handleChange } = props;

    return (
        <OutlinedInput
            id={id}
            name={name}
            value={value}
            variant="outlined"
            color="primary"
            placeholder={placeholder}
            type="text"
            height={height}
            width={width}
            onChange={handleChange}
        />
    );
};

export default StyledInput;
