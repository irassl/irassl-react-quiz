import React from 'react';
import './MenuToggle.css'

const MenuToggle = props =>{
	console.log(props.isOpen)

	
	return(
		<i
			className={`MenuToggle ${(props.isOpen) ? ' fa-times'  : 'fa fa-bars'} `}
			onClick={props.onToggle}
			/>
			
	)
}
export default MenuToggle