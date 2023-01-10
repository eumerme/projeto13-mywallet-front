import { useAsync } from "../useAsync";
import { userApi } from "../../services/userApi";

export function useSignup() {
	const { loading: signupLoading, error: signupError, act: signup } = useAsync((data) => userApi.signup(data), false);

	return {
		signupLoading,
		signupError,
		signup,
	};
}
