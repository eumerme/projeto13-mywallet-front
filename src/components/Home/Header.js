import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { TopContent, H1 } from "../Top";
import { useLogout } from "../../hooks";
import { toast } from "react-hot-toast";

export function Header({ name }) {
	const { logout } = useLogout();

	const submit = async (e) => {
		e.preventDefault();
		try {
			await logout();
			toast.success("Logout feito com sucesso");
			localStorage.clear("mywallet");
			window.location.reload();
		} catch (error) {
			toast.error("Não foi possível fazer o logout");
		}
	};

	return (
		<TopContent>
			<H1>{`Olá, ${name}`}</H1>
			<Logout>
				<BiExit onClick={submit} />
			</Logout>
		</TopContent>
	);
}

const Logout = styled.div`
	width: auto;
	height: auto;
	font-size: 30px;
	color: #ffffff;
	cursor: pointer;
`;
