import styled from "styled-components";

const BankBalance = styled.div`
	width: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border-radius: 5px;
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: #ffffff;
	z-index: 1;

	h2 {
		width: auto;
		height: auto;
		font-size: 17px;
		font-weight: 700;
		padding: 2px;
		color: #000000;
	}
`;

const Total = styled.h3`
	width: auto;
	height: auto;
	font-size: 17px;
	padding: 2px;
	color: ${({ total }) => (total > 0 ? "#03AC00" : "#C70000")};
`;

export { BankBalance, Total };
