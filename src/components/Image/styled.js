import styled from 'styled-components';

export const ImageComponent = styled.div`
	background: ${props => `url(${props.background})`};
	width: ${props => props.width};
	height: ${props => props.height}; 
	background-repeat: no-repeat;
	background-position: center;
`;
