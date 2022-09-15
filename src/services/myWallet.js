import axios from 'axios';

const urlBase = `${process.env.REACT_APP_API_BASE_URL}`;

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

function createTransaction(body) {
	const config = createHeaders();
	const promise = axios.post(`${urlBase}/transactions`, body, config);
	return promise;
}

function deleteTransaction(transactionId) {
	const config = {
		headers: {
			User: transactionId,
		},
	};
	const promise = axios.delete(`${urlBase}/transactions`, config);
	return promise;
}

function logout() {
	const config = createHeaders();
	const promise = axios.post(`${urlBase}/logout`, {}, config);
	return promise;
}

export {
	signup,
	login,
	getTransactions,
	createTransaction,
	deleteTransaction,
	logout,
};
