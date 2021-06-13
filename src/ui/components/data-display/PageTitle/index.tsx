import React from 'react';
import { PageSubtitleStyle, PageTitleContainer, PageTitleStyle } from './style';

interface PageTitleProps {
	title: string;
	subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
	return (
		<PageTitleContainer>
			<PageTitleStyle>{title}</PageTitleStyle>
			<PageSubtitleStyle>{subtitle}</PageSubtitleStyle>
		</PageTitleContainer>
	);
};

export default PageTitle;
