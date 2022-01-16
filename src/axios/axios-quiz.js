import axios from 'axios'

//https://react-quiz-b245b-default-rtdb.europe-west1.firebasedatabase.app
export default axios.create({
	baseURL: 'https://react-quiz-b245b-default-rtdb.europe-west1.firebasedatabase.app/'

})

