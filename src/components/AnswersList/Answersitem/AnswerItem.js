import React from 'react';
import './AnswerItem.css';

//`AnswerItem ${props.state ? 'success' : 'error'}`
const AnswerItem = props =>{
	return(
		<li className={`${props.state} AnswerItem`} onClick={() => props.onAnswerClick(props.answer.id)}>
			{props.answer.text}
		</li>
	)
}
export default AnswerItem