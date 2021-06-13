import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { AppList, FooterContainer, FooterStyle, FooterTitle } from './style';

const Footer: React.FC = () => {
	return (
		<FooterStyle>
			<FooterContainer>
				<Box sx={{ maxWidth: '25rem' }}>
					<FooterTitle>Quem somos</FooterTitle>
					<Typography variant={'body2'} sx={{ mt: 2 }}>
						E-Diaristas te ajuda a encontrar um profissional perfeito para
						realizar a limpeza da sua casa. Garantimos a melhor profissional com
						total segurança e praticidade! São milhares de clientes satisfeitos
						por todo o país.
					</Typography>
				</Box>
				<div>
					<FooterTitle>Baixe nossos aplicativos</FooterTitle>
					<AppList>
						<li>
							<a href={'/'} target={'_blank'}>
								<img src="/img/logos/app-store.png" alt="app-store" />
							</a>
						</li>
						<li>
							<a href={'/'} target={'_blank'}>
								<img src="/img/logos/google-play.png" alt="google-play" />
							</a>
						</li>
					</AppList>
				</div>
			</FooterContainer>
		</FooterStyle>
	);
};

export default Footer;
