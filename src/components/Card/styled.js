import styled from 'styled-components';

export const CardWrapper = styled.div`
	display: flex;
	${({ vertical }) => vertical && `
    flex-direction: column`}
`