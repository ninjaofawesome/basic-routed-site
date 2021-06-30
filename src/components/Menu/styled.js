import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/colors';

const fadeIn = keyframes`
	0%   { opacity: 0; }
	100% { opacity: 1; }
`;

const fadeOut = keyframes`
	0%   { opacity: 1; }
	100% { opacity: 0; }
`;

export const StyledMenu = styled.ul`
	animation: ${props => props.isVisible ? fadeIn : fadeOut} 1s ease;
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    position: absolute;
    background-color: ${colors.white};
    list-style-type: none;
    padding: 0;

`;
