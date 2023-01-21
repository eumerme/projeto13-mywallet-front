import styled from "styled-components";

const BankStatement = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	overflow-y: scroll;
	margin-bottom: 47px;

	&::-webkit-scrollbar {
		width: 0;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const Content = styled.div`
	width: 100%;
	min-height: 30px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin: 5px 0;

	> h2,
	h5 {
		width: auto;
		height: auto;
		font-size: 16px;
		padding: 2px 7px;
		color: #c6c6c6;
	}

	> h5,
	h3 {
		cursor: pointer;
	}

	> h3 {
		width: 100%;
		height: auto;
		font-size: 16px;
		padding: 0 10px;
		color: #000000;
		word-break: break-all;
		word-wrap: break-word;
	}
`;

const Value = styled.h4`
	width: auto;
	height: auto;
	font-size: 16px;
	padding: 2px;
	margin-right: 8px;
	color: ${({ type }) => (type === "credit" ? "#03AC00" : "#C70000")};
`;

export { Content, BankStatement, Value };
