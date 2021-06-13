import { AppBar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const HeaderAppBar = styled(AppBar)`
	background-color: ${({ theme }) => theme.palette.background.paper};
	box-shadow: 0rem 0.313rem 0.25rem rgba(0, 0, 0, 0.05);

	${({ theme }) => theme.breakpoints.up('md')} {
		.MuiToolbar-root {
			height: 6.25rem;
		}
	}

	${({ theme }) => theme.breakpoints.down('md')} {
		.MuiToolbar-root {
			display: flex;
			justify-content: center;
		}
	}
`;

export const HeaderLogo = styled('img')`
	height: 1.563rem;

	${({ theme }) => theme.breakpoints.up('md')} {
		.MuiToolbar-root {
			height: 2.938rem;
		}
	}
`;
