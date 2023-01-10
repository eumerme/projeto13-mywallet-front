import { useAsync } from "../useAsync";
import { userApi } from "../../services/userApi";

export function useLogout() {
	const { loading: logoutLoading, error: logoutError, act: logout } = useAsync((data) => userApi.logout(data), false);

	return {
		logoutLoading,
		logoutError,
		logout,
	};
}
