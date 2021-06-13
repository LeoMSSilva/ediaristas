import PageTitle from '@components/data-display/PageTitle';
import UserInformation from '@components/data-display/UserInformation';
import SafeEnvironment from '@components/feedback/SafeEnvironment';

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
			<UserInformation
				picture={'https://github.com/LeoMSSilva.png'}
				name={'Leonardo'}
				rating={4}
				description={'Rio de Janeiro'}
			/>
		</div>
	);
}
