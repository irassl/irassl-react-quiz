import React from 'react';
import './Drawer.css'
import {NavLink}  from 'react-router-dom' 
import BackDrop from '../../UI/BackDrop/BackDrop';

const links = [
	{ to: '/', label: 'Список', exact: true },
	{ to: '/auth', label: 'Авторизация', exact: false },
	{ to: '/quiz-creator', label: 'Создать тест', exact: false }
]
//{`MenuToggle ${(props.isOpen) ? ' fa-times'  : 'fa fa-bars'} 
class Drawer extends React.Component{

	renderLinks(){
		return links.map((link,index) =>{
			return(
				<li key={index}>
					<NavLink 
					to={link.to}
					exact={link.exact}
					activeClassName={Drawer.active}
					onClick={this.props.onClose}
					
					>{link.label}
					</NavLink>
				</li>				
			)
		})
	}
	render(){
		return(
			<React.Fragment>
			<nav className={`Drawer  ${(!this.props.isOpen) ? 'close' : ''} `}>
				<ul>
					{this.renderLinks()}
				</ul>
			</nav>
			{this.props.isOpen ? <BackDrop onClick={this.props.onClose}/>: null}
			</React.Fragment>
		)
	}

}

export default Drawer

