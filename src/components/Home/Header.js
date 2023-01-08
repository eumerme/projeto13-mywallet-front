import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import userLogout from "../PrivatePages/UserLogout/UserLogout";
import { TopContent, H1 } from "../Top";

export function Header({ name }) {
	return (
		<TopContent>
			<H1>{`Olá, ${name}`}</H1>
			<Logout>
				<BiExit onClick={() => userLogout()} />
			</Logout>
		</TopContent>
	);
}

const Logout = styled.div`
	width: auto;
	height: auto;
	font-size: ${({ transaction }) => (transaction ? "20px" : "30px")};
	color: #ffffff;
`;
