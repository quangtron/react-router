import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
	{
		name: 'Home',
		to: '/',
		exact: true
	},
	{
		name: 'Products',
		to: '/products',
		exact: false
	}
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
	return(
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({match}) => {
				const active = match ? 'active' : '';
				return(
					<li className={active}>
						<Link to={to}>
							{label}
						</Link>
					</li>
				);
			}}
		/>
	);
};

class Menu extends Component {
    render(){
        return(
            <header>
				<nav className="navbar navbar-inverse">
					<ul className="nav navbar-nav">
						{this.showMenus(menus)}
					</ul>
				</nav>
			</header>
        );
	}
	
	showMenus = menus => {
		let result = null;

		if(menus.length > 0){
			result = menus.map((menu, index) => {
				return(
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact}
					/>
				);
			})
		}

		return result;
	}
}

export default Menu;