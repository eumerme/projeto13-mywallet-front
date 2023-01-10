import { api, createHeaders } from "./api";

async function signup(body) {
	const response = await api.post("/signup", body);
	return response.data;
}

async function login(body) {
	const response = await api.post("/login", body);
	return response.data;
}

async function logout() {
	const headers = createHeaders();
	const response = await api.post("/logout", {}, headers);
	return response;
}

export const userApi = { signup, login, logout };
