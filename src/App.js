import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./globalStyle/GlobalStyle";
import { Private } from "./components/Private/Private";
import { Login, Signup, Home, Transaction } from "./Pages/index.js";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Toaster />
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
									<Transaction />
								</Private>
							}
						/>
					</Routes>
				</UserProvider>
			</BrowserRouter>
		</>
	);
}
