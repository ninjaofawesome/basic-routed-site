import React from 'react';
import PropTypes from 'prop-types';
import { WrapperComponent } from './styled';

const Wrapper = props => (
	<WrapperComponent>
		{props.children}
	</WrapperComponent>
);

Wrapper.props = {
	children: <div />
};

Wrapper.defaultProps = {
	children: PropTypes.node
};

export default Wrapper;