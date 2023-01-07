import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});

function createHeaders() {
	const auth = JSON.parse(localStorage.getItem("mywallet"));

	if (auth) {
		const config = {
			headers: {
				Authorization: `Bearer ${auth.token}`,
			},
		};
		return config;
	}
}

export { api, createHeaders };
