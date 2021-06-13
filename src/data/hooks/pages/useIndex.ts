import { UserShortInterface } from 'data/@types/UserInterface';
import { ApiService } from 'data/services/ApiService';
import { ValidationService } from 'data/services/ValidationService';
import { useMemo, useState } from 'react';

export default function useIndex() {
	const [cep, setCep] = useState('');
	const cepValid = useMemo(() => {
		return ValidationService.cep(cep);
	}, [cep]);
	const [error, setError] = useState('');
	const [searchDone, setSearchDone] = useState(false);
	const [load, setLoad] = useState(false);
	const [diarists, setDiarists] = useState([] as UserShortInterface[]);
	const [diaristsRemaining, setDiaristsRemaining] = useState(0);

	async function searchProfissionals(cep: string) {
		setSearchDone(false);
		setLoad(true);
		setError('');

		try {
			const { data } = await ApiService.get<{
				diaristas: UserShortInterface[];
				quantidade_diaristas: number;
			}>('api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));
			setDiarists(data.diaristas);
			setDiaristsRemaining(data.quantidade_diaristas);
			setSearchDone(true);
		} catch (error) {
			setError('Cep não encontrado');
		}

		setLoad(false);
	}

	return {
		cep,
		setCep,
		cepValid,
		searchProfissionals,
		diarists,
		diaristsRemaining,
		error,
		searchDone,
		load,
	};
}
