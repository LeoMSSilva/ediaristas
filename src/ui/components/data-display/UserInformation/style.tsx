import { Avatar, Rating } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const UserInformationContainer = styled('div')`
	display: grid;
	grid-template-columns: 5.75rem 1fr;
	grid-template-rows: repeat(3, auto);
	grid-template-areas:
		'avatar name'
		'avatar rating'
		'avatar description';
	background-color: ${({ theme }) => theme.palette.grey[50]};
	padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
	gap: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(2)};
	align-items: center;
`;

export const AvatarStyled = styled(Avatar)`
	grid-area: avatar;
	height: initial;
	width: 100%;
	aspect-ratio: 1;
`;

export const UserName = styled('div')`
	grid-area: name;
	font-weight: bolder;
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typography.body2};
`;

export const RatingStyled = styled(Rating)`
	grid-area: rating;
	font-size: 0.875rem;
`;

export const UserDescription = styled('div')`
	grid-area: description;
	color: ${({ theme }) => theme.palette.text.secondary};
	font-size: ${({ theme }) => theme.typography.body2};
`;
