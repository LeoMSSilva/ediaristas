import { styled } from '@material-ui/core/styles';

export const SafeEnvironmentContainer = styled('div')`
	background-color: ${({theme})=>theme.palette.background.default};
  color: ${({theme})=>theme.palette.text.secondary};
	padding: ${({ theme }) => theme.spacing(2)} 0;
  text-align: right;
	font-size: 0.75rem;
`;
