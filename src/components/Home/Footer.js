import styled from "styled-components";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function Footer({ email }) {
	const navigate = useNavigate();

	const redirect = (type, email) => {
		return navigate("/transaction", {
			replace: false,
			state: { type, email },
		});
	};

	return (
		<Content>
			<Registry onClick={() => redirect("credit", email)}>
				<Icons>
					<BiPlusCircle />
				</Icons>
				<h2>Nova entrada</h2>
			</Registry>
			<Registry onClick={() => redirect("debit", email)}>
				<Icons>
					<BiMinusCircle />
				</Icons>
				<h2>Nova saída</h2>
			</Registry>
		</Content>
	);
}

const Content = styled.div`
	width: 100%;
	min-height: 21%;
	max-height: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	padding: 13px 0;
`;

const Registry = styled.div`
	min-width: 48%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border-radius: 5px;
	padding: 10px;
	background-color: #a328d6;
	cursor: pointer;

	> h2 {
		width: 44px;
		height: auto;
		font-size: 17px;
		font-weight: 700;
		color: #ffffff;
		line-height: 20px;
	}
`;

const Icons = styled.div`
	width: auto;
	height: auto;
	font-size: 25px;
	color: #ffffff;
`;
