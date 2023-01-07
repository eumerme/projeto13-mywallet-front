import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyle/GlobalStyle";
import Signup from "./PublicPages/Signup/Signup";
import Home from "./PrivatePages/Home/Home";
import NewTransaction from "./PrivatePages/NewTransaction/NewTransaction";
import Private from "./PrivatePages/Private";
import { Login } from "../Pages/index.js";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
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
			</BrowserRouter>
		</>
	);
}
