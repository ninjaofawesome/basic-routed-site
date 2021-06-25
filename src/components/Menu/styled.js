import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	0%   { opacity: 0; }
	100% { opacity: 1; }
`;

const fadeOut = keyframes`
	0%   { opacity: 1; }
	100% { opacity: 0; }
`;

export const StyledMenu = styled.div`
	animation: ${props => props.isVisible ? fadeIn : fadeOut} 1s ease;
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;
