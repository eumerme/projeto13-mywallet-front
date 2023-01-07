import styled from "styled-components";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => (props.transaction ? "flex-start" : "space-between")};
	align-items: center;
`;

export { Wrapper };
