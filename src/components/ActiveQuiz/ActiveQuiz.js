import React from 'react';
import './ActiveQuiz.css'
import AnsversList from '../AnswersList/AnswersList';


const ActiveQuiz = props =>(
	<div className='ActiveQuiz'>
		<p className='Question'>
			<span>
				<strong>{props.answerNubmer}.</strong>&nbsp;
				{props.question}
			</span>
			<small> {props.answerNubmer} bp {props.quizLength}</small>
		</p>
		<AnsversList
			state={props.state}
			answers={props.answers}
			onAnswerClick={props.onAnswerClick}
			
		/>
	</div>
)

export default ActiveQuiz
