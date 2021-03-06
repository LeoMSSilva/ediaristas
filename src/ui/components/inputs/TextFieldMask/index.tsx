import { OutlinedTextFieldProps } from '@material-ui/core';
import React from 'react';
import InputMask from 'react-input-mask';
import TextField from '../TextField/index';

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
	mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, value, onChange, ...props }) => {
	return <InputMask mask={mask} value={value} onChange={onChange}  >{() => <TextField {...props} />}</InputMask>;
};

export default TextFieldMask;
