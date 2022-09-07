import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => (props.registry ? 'flex-start' : 'center')};
	align-items: center;
`;

const Top = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-size: 26px;
		font-weight: 700;
		color: #ffffff;
	}
`;

const Main = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background-color: #ffffff;

	h2 {
		width: 180px;
		height: auto;
		text-align: center;
		font-size: 20px;
		color: #868686;
	}
`;

const Footer = styled.div`
	width: 100%;
	height: 180px;
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

	h2 {
		width: 44px;
		height: auto;
		font-size: 17px;
		font-weight: 700;
		color: #ffffff;
		line-height: 20px;
	}
`;

const Form = styled.form`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin-top: 10px;

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
`;

export { Wrapper, Top, Main, Footer, Registry, Form };
