import React, { useState } from 'react'
import FlexContainer from './common/FlexContainer';
import styled from 'styled-components';
import theme from '../styles/theme';
import {usePodcasts} from '../store/selectors/podcasts';

const Container = styled.div`
	max-width: 300px;
	display: flex;
	justify-content: center;
	padding: 0px 14px;
	margin-left: auto;
`

const Input = styled.input`
	width: 100%;
	padding: 10px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const Counter = styled.span`
	font-size: 1.2rem;
	color: #fff;
	font-weight: bold;
	padding: 0px 6px;
	border-radius: 8px;
	background-color: ${theme.primary};
`;

function AppSearcher({name, setName}) {
	const podcasts = usePodcasts();

	const handleChange = (event) => {
		setName(event.target.value)
	}

  return (
    <Container>
			<FlexContainer $alignItems="center" $mr="10">
				<Counter>{podcasts && Array.isArray(podcasts) ? podcasts.length : 0}</Counter>
			</FlexContainer>
			<Input onChange={handleChange} value={name}></Input>
    </Container>
  )
}

export default AppSearcher