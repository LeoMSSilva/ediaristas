import PageTitle from '@components/data-display/PageTitle';
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
		</div>
	);
}
