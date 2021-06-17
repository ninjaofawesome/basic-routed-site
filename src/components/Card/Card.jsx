import React from 'react';
import PropTypes from 'prop-types';

import {
	CardWrapper
} from './styled';

const Card = (props) => {
	const { 
		children,
		vertical 
	} = props;

	return (
		<CardWrapper vertical>{children}</CardWrapper>
	);
};

Card.props = {
	children: <div />,
	direction: true
};

Card.defaultProps = {
	children: PropTypes.node,
	directipn: PropTypes.bool
};

export default Card;