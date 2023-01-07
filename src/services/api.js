import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});

function createHeaders() {
	const userData = JSON.parse(localStorage.getItem("mywallet"));

	if (userData) {
		const config = {
			headers: {
				userDataorization: `Bearer ${userData.token}`,
			},
		};
		return config;
	}
}

export { api, createHeaders };
