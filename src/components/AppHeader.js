import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import AppLoader from './AppLoader';
import FlexContainer from './common/FlexContainer';
import {useIsLoadingPodcasts} from '../store/selectors/podcasts';

const Header = styled.header `
	display: flex;
	justify-content: space-between;
	align-content: center;
	border-bottom: 1px solid #e4e1e1;
	margin-bottom: 20px;
	padding: 8px 0px;
`;

const AppName = styled.span`
	color: ${theme.primary};
	font-size: 1.2rem;
	font-weight: bold;
	margin: 12px 0px;
	display: block;
`

function AppHeader() {
	const isLoading = useIsLoadingPodcasts();
	return (
		<Header>
			<FlexContainer $alignItems="center" $justify="space-between" fluid>
					<Link to="/">
							<AppName>Podcaster</AppName>
					</Link>
					{ isLoading && <AppLoader></AppLoader>}
			</FlexContainer>
		</Header>
	)
}

export default AppHeader