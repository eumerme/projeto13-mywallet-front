import styled from "styled-components";

const Wrapper = styled.div`
	width: 100vw;
	max-width: 1024px;
	height: 100vh;
	padding: 0 24px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => (props.transaction ? "flex-start" : "space-between")};
	align-items: center;
`;

export { Wrapper };
