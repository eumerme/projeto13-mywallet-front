import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-family: 'Saira Stencil One', cursive;
		font-size: 32px;
		color: #ffffff;
		margin-bottom: 28px;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	input {
		width: 100%;
		height: 58px;
		font-size: 20px;
		border: none;
		border-radius: 5px;
		outline: none;
		padding: 0 15px;
		margin-bottom: 13px;
	}

	input::placeholder {
		font-size: 20px;
		color: #000000;
	}

	button {
		width: 100%;
		height: 46px;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		border: none;
		border-radius: 5px;
		background-color: #a328d6;
	}

	div {
		font-size: 15px;
		font-weight: 700;
		color: #ffffff;
		margin-top: 32px;
	}
`;

export { Wrapper };
