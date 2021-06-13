import { TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const TextFieldStyle = styled(TextField)`
	.MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
	}
  
  .MuiOutlineInput-notchedOutline{
    border-color:  ${({ theme }) => theme.palette.grey[100]};
  }
`;
