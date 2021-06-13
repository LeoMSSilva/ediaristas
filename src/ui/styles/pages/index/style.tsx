import { styled } from '@material-ui/core/styles';

export const FormElementsContainer = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing(5)};
	max-width: 40.625rem;
	margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;