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

function getTransactions(token) {
	const config = createHeaders();
	const promise = axios.get(`${urlBase}/transactions`, config);
	return promise;
}

function createTransactions(body) {
	const config = createHeaders();
	const promise = axios.post(`${urlBase}/transactions`, body, config);
	return promise;
}

function logout() {
	const config = createHeaders();
	const promise = axios.post(`${urlBase}/logout`, {}, config);
	return promise;
}

export { signup, login, getTransactions, createTransactions, logout };
