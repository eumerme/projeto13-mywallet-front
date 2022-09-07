import axios from 'axios';

const urlBase = 'http://localhost:5000';

function createHeaders() {
	const auth = JSON.parse(localStorage.getItem('mywallet'));

	if (auth !== null) {
		const config = {
			headers: {
				Authorization: `Bearer ${auth.token}`,
			},
		};
		return config;
	}
}

function signup(body) {
	const promise = axios.post(`${urlBase}/auth/signup`, body);
	return promise;
}

function login(body) {
	const config = createHeaders();
	const promise = axios.post(`${urlBase}/auth/login`, body, config);
	return promise;
}

export { signup, login };
