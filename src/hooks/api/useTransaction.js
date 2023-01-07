import { useAsync } from "../useAsync";
import { transactionsApi } from "../../services/transactionsApi";

export function useTransaction() {
	const {
		data: transactions,
		loading: transactionsLoading,
		error: transactionsError,
	} = useAsync(() => transactionsApi.getTransactions());

	return {
		transactions,
		transactionsLoading,
		transactionsError,
	};
}
