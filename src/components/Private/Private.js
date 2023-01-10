import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function Private({ children }) {
	const { userData } = useContext(UserContext);

	if (!userData.token) return <Navigate to="/" />;

	return <>{children}</>;
}
