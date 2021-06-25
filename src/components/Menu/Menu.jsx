import React from 'react';
import PropTypes from 'prop-types';

import { StyledMenu } from './styled';

const Menu = ({ isVisible }) => (
	<StyledMenu isVisible={isVisible} >
		<ul>
			<li>Hello</li>
			<li>World</li>
		</ul>
	</StyledMenu>
);

Menu.propTypes = {
	isVisible: PropTypes.bool
};

Menu.defaultProps = {
	isVisible: false
}

export default Menu;