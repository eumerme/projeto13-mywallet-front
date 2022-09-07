import { useNavigate } from 'react-router-dom';
import { Wrapper, Top, Main, Footer, Registry } from '../styles/styles';

export default function Home() {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Top>
				<h1>{`Olá, fulano`}</h1>
				<div>icon</div>
			</Top>
			<Main>
				<h2>{'Não há registros de entrada ou saída'}</h2>
			</Main>
			<Footer>
				<Registry
					onClick={() => {
						navigate('/registration', {
							replace: false,
							state: 'income',
						});
					}}
				>
					<div>icon</div>
					<h2>{'Nova entrada'}</h2>
				</Registry>
				<Registry
					onClick={() => {
						navigate('/registration', {
							replace: false,
							state: 'outcome',
						});
					}}
				>
					<div>icon</div>
					<h2>{'Nova saída'}</h2>
				</Registry>
			</Footer>
		</Wrapper>
	);
}
