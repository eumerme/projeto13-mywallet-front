import axios from 'axios';

const urlBase = 'http://localhost:5000';

function createHeaders() {
	const auth = JSON.parse(localStorage.getItem('mywallet'));

	if (auth) {
		const config = {
			headers: {
				Authorization: `Bearer ${auth.token}`,
			},
		};
		return config;
	}
}

function signup(body) {
	const promise = axios.post(`${urlBase}/signup`, body);
	return promise;
}

function login(body) {
	const config = createHeaders();
	const promise = axios.post(`${urlBase}/login`, body, config);
	return promise;
}

function getTransactions() {
	const config = createHeaders();
	const promise = axios.get(`${urlBase}/transactions`, config);
	return promise;
	/* 
	try {
		const { data } = await axios.get(`${urlBase}/transactions`, config);
		//promise = data;
		console.log(data);
		return data;
	} catch (error) {
		console.error(error.message);
		return;
	} */
}

export { signup, login, getTransactions };
