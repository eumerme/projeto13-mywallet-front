import { api, createHeaders } from "./api";

function getTransactions(token) {
	const headers = createHeaders();
	const promise = api.get("/transactions", headers);
	return promise;
}

function createTransaction(body) {
	const headers = createHeaders();
	const promise = api.post("/transactions", body, headers);
	return promise;
}

function deleteTransaction(id) {
	const headers = createHeaders();
	const promise = api.delete(`/transactions/${id}`, headers);
	return promise;
}

export const transactionsApi = { getTransactions, createTransaction, deleteTransaction };
