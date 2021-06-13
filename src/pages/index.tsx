import PageTitle from '@components/data-display/PageTitle';
import UserInformation from '@components/data-display/UserInformation';
import SafeEnvironment from '@components/feedback/SafeEnvironment';
import TextFieldMask from '@components/inputs/TextFieldMask';
import {
	Button,
	CircularProgress,
	Container,
	Typography,
} from '@material-ui/core';
import {
	FormElementsContainer,
	ProfissionalsContainer,
	ProfissionalsPaper,
} from '@styles/pages/index/style';

export default function Home() {
	return (
		<div>
			<SafeEnvironment />
			<PageTitle
				title={'Conheça os profissionais'}
				subtitle={
					'Preencha seu endereço e vejatodos os profissionais da sua localidade'
				}
			/>

			<Container>
				<FormElementsContainer>
					<TextFieldMask
						mask={'99.999-999'}
						label={'Digite seu CEP'}
						fullWidth
						variant={'outlined'}
					/>

					{false && <Typography color={'error'}>Cpf inválido</Typography>}

					<Button
						variant={'contained'}
						color={'secondary'}
						sx={{ width: '13.75rem' }}
					>
						{false ? <CircularProgress size={20} /> : 'Buscar'}
					</Button>
				</FormElementsContainer>

				{true ? (
					<ProfissionalsPaper>
						<ProfissionalsContainer>
							<UserInformation
								picture={'https://github.com/LeoMSSilva.png'}
								name={'Leonardo'}
								rating={4}
								description={'Rio de Janeiro'}
							/>
						</ProfissionalsContainer>

						<Container sx={{ textAlign: 'center' }}>
							<Typography sx={{ mt: 5 }}>
								...e mais x profissionais atendem ao seu endereço.
							</Typography>

							<Button variant={'contained'} color={'secondary'} sx={{ mt: 5 }}>
								Contratar um profissional
							</Button>
						</Container>
					</ProfissionalsPaper>
				) : (
					<Typography align={'center'} color={'textPrimary'}>
						Ainda não temos nenhuma diarista disponível em sua cidade!
					</Typography>
				)}
			</Container>
		</div>
	);
}
