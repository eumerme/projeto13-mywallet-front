import styled from "styled-components";

const Wrapper = styled.div`
	width: 100vw;
	max-width: 1024px;
	height: 100vh;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	> h1 {
		font-family: "Saira Stencil One", cursive;
		font-size: 32px;
		color: #ffffff;
		margin-bottom: 18px;
	}

	> a {
		font-size: 15px;
		font-weight: 700;
		color: #ffffff;
		margin-top: 32px;
	}
`;

const Form = styled.form`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin-top: 10px;

	> input {
		width: 100%;
		height: 58px;
		font-size: 20px;
		border: none;
		border-radius: 5px;
		outline: none;
		padding: 0 15px;
		margin-bottom: 13px;

		&::placeholder {
			font-size: 17px;
			color: #868686;
		}
	}

	> button {
		width: 100%;
		height: 46px;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		border: none;
		border-radius: 5px;
		background-color: #a328d6;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
`;

export { Wrapper, Form };
