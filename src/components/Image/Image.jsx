import React from 'react';
import PropTypes from 'prop-types';
import { ImageComponent } from './styled';

const Image = props => {
	const {
		background,
		width,
		height
	} = props;

	return (
		<ImageComponent 
			background={background} 
			height={height} 
			width={width} 
		/>
	); 
};

Image.propTypes = {
	background: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string
};

Image.defaultProps = {
	background: '',
	width: '',
	height: ''
};

export default Image;