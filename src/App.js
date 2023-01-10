import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle/GlobalStyle";
import Private from "./components/PrivatePages/Private";
import { Login, Signup, Home, NewTransaction } from "./Pages/index.js";
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
