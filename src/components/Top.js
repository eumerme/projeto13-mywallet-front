import styled from "styled-components";

const TopContent = styled.div`
	width: 100%;
	min-height: 10%;
	max-height: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: ${({ transaction }) => (transaction ? "20px" : "30px")};
`;

const H1 = styled.h1`
	font-size: 26px;
	font-weight: 700;
	color: #ffffff;
`;

export { TopContent, H1 };
