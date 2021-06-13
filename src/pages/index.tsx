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
import useIndex from 'data/hooks/pages/useIndex';

export default function Home() {
	const {
		cep,
		setCep,
		cepValid,
		searchProfissionals,
		diarists,
		diaristsRemaining,
		error,
		searchDone,
		load,
	} = useIndex();

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
						value={cep}
						onChange={(e) => setCep(e.target.value)}
					/>

					{error && <Typography color={'error'}>{error}</Typography>}

					<Button
						variant={'contained'}
						color={'secondary'}
						sx={{ width: '13.75rem' }}
						disabled={!cepValid || load}
						onClick={() => searchProfissionals(cep)}
					>
						{load ? <CircularProgress size={20} /> : 'Buscar'}
					</Button>
				</FormElementsContainer>

				{searchDone &&
					(diarists.length > 0 ? (
						<ProfissionalsPaper>
							<ProfissionalsContainer>
								{diarists.map((iten, index) => {
									return (
										<UserInformation
											key={index}
											picture={iten.foto_usuario}
											name={iten.nome_completo}
											rating={iten.reputacao}
											description={iten.cidade}
										/>
									);
								})}
							</ProfissionalsContainer>

							<Container sx={{ textAlign: 'center' }}>
								{diaristsRemaining > 0 && (
									<Typography sx={{ mt: 5 }}>
										...e mais {diaristsRemaining}
										{diaristsRemaining > 1
											? ' profissionais atendem '
											: ' profissional atende '}
										ao seu endereço.
									</Typography>
								)}

								<Button
									variant={'contained'}
									color={'secondary'}
									sx={{ mt: 5 }}
								>
									Contratar um profissional
								</Button>
							</Container>
						</ProfissionalsPaper>
					) : (
						<Typography align={'center'} color={'textPrimary'}>
							Ainda não temos nenhuma diarista disponível em sua cidade!
						</Typography>
					))}
			</Container>
		</div>
	);
}
