import { AppBar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const HeaderAppBar = styled(AppBar)`
	background-color: ${({ theme }) => theme.palette.background.paper};
	color: ${({ theme }) => theme.palette.primary.main};
	box-shadow: 0rem 0.313rem 0.25rem rgba(0, 0, 0, 0.05);
`;