import { api, createHeaders } from "./api";

async function getTransactions(token) {
	const headers = createHeaders();
	const promise = await api.get("/transactions", headers);
	return promise;
}

async function createTransaction(body) {
	const headers = createHeaders();
	const promise = await api.post("/transactions", body, headers);
	return promise;
}

async function deleteTransaction(id) {
	const headers = createHeaders();
	const promise = await api.delete(`/transactions/${id}`, headers);
	return promise;
}

export const transactionsApi = { getTransactions, createTransaction, deleteTransaction };
