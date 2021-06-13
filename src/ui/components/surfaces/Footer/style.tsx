import { styled } from '@material-ui/core/styles';

export const FooterStyle = styled('footer')`
	background-color: ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) =>
		theme.palette.getContrastText(theme.palette.primary.main)};
	padding: ${({ theme }) => theme.spacing(4)} 0;
	margin-top: auto;
`;
