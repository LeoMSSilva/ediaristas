import { Paper } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const FormElementsContainer = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing(5)};
	max-width: 40.625rem;
	margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionalsPaper = styled(Paper)`
	padding: ${({ theme }) => theme.spacing(7)};
	margin: 0 auto ${({ theme }) => theme.spacing(10)};
	${({ theme }) => theme.breakpoints.down('md')} {
		&.MuiPaper-root{
			padding: 0;
			box-shadow: none;
		}
	}
`;

export const ProfissionalsContainer = styled('div')`
	display: grid;
	grid-template-columns: 1fr;

	${({ theme }) => theme.breakpoints.up('md')} {
		grid-template-columns: repeat(2, 1fr);
		gap: ${({ theme }) => theme.spacing(6)};
	}

	${({ theme }) => theme.breakpoints.down('md')} {
		margin: 0 ${({ theme }) => theme.spacing(-2)};
		> :nth-of-type(odd){
			background-color: ${({ theme }) => theme.palette.background.paper};
		}
	}
`;
