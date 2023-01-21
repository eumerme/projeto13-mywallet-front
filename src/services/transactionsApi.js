import { api, createHeaders } from "./api";

async function getTransactions() {
	const headers = createHeaders();
	const response = await api.get("/transactions", headers);
	return response.data;
}

async function createTransaction(body) {
	const headers = createHeaders();
	const response = await api.post("/transactions", body, headers);
	return response;
}

async function updateTransaction({ id, body }) {
	const headers = createHeaders();
	const response = await api.patch(`/transactions/${id}`, body, headers);
	return response;
}

async function deleteTransaction(id) {
	const headers = createHeaders();
	const response = await api.delete(`/transactions/${id}`, headers);
	return response;
}

export const transactionsApi = { getTransactions, createTransaction, updateTransaction, deleteTransaction };
