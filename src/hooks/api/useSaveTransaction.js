import { useAsync } from "../useAsync";
import { transactionsApi } from "../../services/transactionsApi";

export function useSaveTransaction() {
	const {
		loading: saveTransactionLoading,
		error: saveTransactionError,
		act: saveTransaction,
	} = useAsync((data) => transactionsApi.createTransaction(data), false);

	return {
		saveTransactionLoading,
		saveTransactionError,
		saveTransaction,
	};
}
