import { useState } from "react";

export function useHandleInputs() {
	const [inputValue, setInputValue] = useState({});

	const handleInputs = (e) => {
		setInputValue({
			...inputValue,
			[e.target.name]: e.target.value,
		});
	};

	return {
		inputValue,
		setInputValue,
		handleInputs,
	};
}
