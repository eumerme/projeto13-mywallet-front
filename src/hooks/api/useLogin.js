import { useAsync } from "../useAsync";
import { userApi } from "../../services/userApi";

export function useLogin() {
	const { loading: loginLoading, error: loginError, act: login } = useAsync((data) => userApi.login(data), false);

	return {
		loginLoading,
		loginError,
		login,
	};
}
