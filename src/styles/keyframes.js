import { keyframes } from 'styled-components';

export const waveAnimation = keyframes`
	0% {
			transform: scale(0);
			opacity: 0;
	}
	50% {
			opacity: 1;
	}
	100% {
			transform: scale(1.4);
			opacity: 0;
	}
`

export const spin = keyframes`
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(1turn);
    }
`;