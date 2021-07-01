import styled from 'styled-components';

export const ImageComponent = styled.div`
	background-image: url(`${({img}) => img});
	background-color: transparent;
	width: ${({width}) => width} || 200px;
	height: ${({height}) => height} || 200px;
	background-repeat: no-repeat;
	background-position: center;
`;
