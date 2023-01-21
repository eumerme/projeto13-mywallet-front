import { useAsync } from "../useAsync";
import { transactionsApi } from "../../services/transactionsApi";

export function useUpdateTransaction() {
	const {
		loading: updateTransactionLoading,
		error: updateTransactionError,
		act: updateTransaction,
	} = useAsync((data) => transactionsApi.updateTransaction(data), false);

	return {
		updateTransactionLoading,
		updateTransactionError,
		updateTransaction,
	};
}
