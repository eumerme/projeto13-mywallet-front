import { logout } from '../../../services/myWallet';

export default function userLogout() {
	const promise = logout();
	promise
		.then((res) => {
			localStorage.clear('mywallet');
			window.location.reload();
		})
		.catch((error) => console.error(error));
}
