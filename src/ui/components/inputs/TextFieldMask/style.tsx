import { TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const TextFieldStyle = styled(TextField)`
	.MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
	}
  
  .MuiOutlineInput-notchedOutline{
    border-color:  ${({ theme }) => theme.palette.grey[100]};
  }

  
	/* 
	color: ${({ theme }) =>
		theme.palette.getContrastText(theme.palette.primary.main)};
	padding: ${({ theme }) => theme.spacing(4)} 0;
	margin-top: auto; */
`;
