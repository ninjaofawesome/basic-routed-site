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
	vertical: true
};

Card.defaultProps = {
	children: PropTypes.node,
	vertical: PropTypes.bool
};

export default Card;