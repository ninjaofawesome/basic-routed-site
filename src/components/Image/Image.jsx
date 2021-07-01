import React from 'react';
import PropTypes from 'prop-types';
import { ImageComponent } from './styled';

const Image = props => {

	const {
		img,
		width,
		height
	} = props;

	return <ImageComponent img={img} height={height} width={width} />
};

Image.propTypes = {
	img: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string
};

Image.defaultProps = {
	img: '',
	width: '',
	height: ''
};

export default Image;