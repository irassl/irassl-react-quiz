import React from 'react';
import './FinishedQuiz.css'
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';


	// className={`${'fa fa-times'} ${'error'} `}
	//{`${'fa fa-check'}  ${'success'}`}
	//`AnswerItem ${props.state ? 'success' : 'error'}`
const FinishedQuiz = props =>{
	const successCount = Object.keys(props.results).reduce((total,key) => {
		if (props.results[key] === 'success'){
		total ++
		}
		
		return total
	},0 )
	
	return(
		<div className='FinishedQuiz'>
			<ul>
				{props.quiz.map((quizItem,index)=>{
					return(
						<li key={index}>
							<strong >{index +1} </strong>. &nbsp;
							{quizItem.question} &nbsp;
							<i className={`${props.results === 'error' ? 'fa fa-times': 'fa fa-check' } `}/>
						</li>
					)
				})}
			</ul>
			<p>Правильно {successCount} из {props.quiz.length}</p>

			<div>
				<Button onClick={props.onRetry} type="primary">Повторить</Button>
				<Link to="/">
				<Button type="success">Перейти в список тестов</Button>
				</Link>
			</div>
		</div>
	)
}

export default FinishedQuiz