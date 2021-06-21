import React, { Component } from 'react';
import Menu from '../Menu';
import { HeaderContainer } from './styled';

class Header extends Component {

	constructor() {
	    super();

	    this.state = {
	      visible: false,
	    };

	    this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({ visible: !this.state.visible })
	}

	render() {
	
		return (
			<HeaderContainer>
				<button onClick={this.toggleMenu}>Menu</button>
				<Menu />
			</HeaderContainer>
		);
	}
	
}


export default Header;