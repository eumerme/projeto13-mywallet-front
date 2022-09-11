import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: ${(props) =>
		props.transaction ? 'flex-start' : 'space-between'};
	align-items: center;
`;

const Top = styled.div`
	width: 100%;
	min-height: 10%;
	max-height: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-size: 26px;
		font-weight: 700;
		color: #ffffff;
	}

	div {
		width: auto;
		height: auto;
		font-size: ${(props) => (props.transaction ? '20px' : '30px')};
		color: #ffffff;
	}
`;

const Main = styled.div`
	width: 100%;
	min-height: 69%;
	max-height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding: 2px 10px;
	background-color: #ffffff;
	position: relative;

	h2 {
		width: 180px;
		height: auto;
		text-align: center;
		font-size: 20px;
		color: #868686;
	}
`;

const BankStatement = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	overflow-y: scroll;
	margin-bottom: 47px;

	div {
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 5px 0;
	}

	h2 {
		width: auto;
		height: auto;
		font-size: 16px;
		padding: 2px;
		color: #c6c6c6;
	}

	h3 {
		width: 100%;
		height: auto;
		font-size: 16px;
		padding: 0 10px;
		color: #000000;
		word-break: break-all;
	}
`;

const Value = styled.h4`
	width: auto;
	height: auto;
	font-size: 16px;
	padding: 2px;
	margin-right: 8px;
	color: ${(props) => (props.credit ? '#03AC00' : '#C70000')};
`;

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

const BBalance = styled.h3`
	width: auto;
	height: auto;
	font-size: 17px;
	padding: 2px;
	color: ${(props) => (props.total > 0 ? '#03AC00' : '#C70000')};
`;

const Footer = styled.div`
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

	h2 {
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

export {
	Wrapper,
	Top,
	Main,
	Footer,
	Registry,
	BankStatement,
	BankBalance,
	Value,
	BBalance,
	Icons,
};
