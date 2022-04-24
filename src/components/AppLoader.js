import styled from 'styled-components'
import React from 'react'
import theme from '../styles/theme';
import { waveAnimation } from '../styles/keyframes'

const Loader = styled.div`
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	box-sizing: border-box;
	text-align: center;
	&::before,
	&::after {
		opacity: 0;
		box-sizing: border-box;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 100px;
		border: 5px solid ${theme.primary};
		box-shadow: 0 0 5px ${theme.primary}, inset 0 0 5px ${theme.primary};
	}
	&::after {
		z-index: 1;
		animation: ${waveAnimation} 1s infinite 1s;
	}
	&::before {
		z-index: 2;
		animation: ${waveAnimation} 1s infinite;
	}
`;

const Circle = styled.div`
	border-radius: 50%;
	background-color: ${theme.primary};
	width: 20px;
	height: 20px;
`

function AppLoader() {
  return (
    <Loader>
        <Circle></Circle>
    </Loader>
  )
}

export default AppLoader