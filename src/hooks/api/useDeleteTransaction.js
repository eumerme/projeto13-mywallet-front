import { useAsync } from "../useAsync";
import { transactionsApi } from "../../services/transactionsApi";

export function useDeleteTransaction() {
	const {
		loading: deleteTransactionLoading,
		error: deleteTransactionError,
		act: deleteTransaction,
	} = useAsync((data) => transactionsApi.deleteTransaction(data), false);

	return {
		deleteTransactionLoading,
		deleteTransactionError,
		deleteTransaction,
	};
}
