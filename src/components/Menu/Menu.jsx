import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledMenu } from './styled';

const Menu = ({ isVisible }) => (
	<StyledMenu isVisible={isVisible} >
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</StyledMenu>
);

Menu.propTypes = {
	isVisible: PropTypes.bool
};

Menu.defaultProps = {
	isVisible: false
}

export default Menu;