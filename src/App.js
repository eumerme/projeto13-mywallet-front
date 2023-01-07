import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle/GlobalStyle";
import Signup from "./components/PublicPages/Signup/Signup";
import Home from "./components/PrivatePages/Home/Home";
import NewTransaction from "./components/PrivatePages/NewTransaction/NewTransaction";
import Private from "./components/PrivatePages/Private";
import { Login } from "./Pages/index.js";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<UserProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route
							path="/home"
							element={
								<Private>
									<Home />
								</Private>
							}
						/>
						<Route
							path="/transaction"
							element={
								<Private>
									<NewTransaction />
								</Private>
							}
						/>
					</Routes>
				</UserProvider>
			</BrowserRouter>
		</>
	);
}
