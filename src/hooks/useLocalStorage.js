import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = {}) {
	const [storedValue, setStoredValue] = useState(() => {
		const value = JSON.parse(localStorage.getItem(key));
		if (value) {
			return value;
		} else {
			return initialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}
