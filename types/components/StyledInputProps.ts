import { FormHelperTextProps, TextFieldProps } from '@mui/material';
import React from 'react';

type StyledInputProps = FormHelperTextProps &
    TextFieldProps & {
        id: string;
        name: string;
        value: string;
        placeholder: string;
        height: string;
        width: string;
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };

export default StyledInputProps;
