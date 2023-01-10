import { useState, useEffect } from "react";

export function useAsync(handler, immediate = true) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(immediate);
	const [error, setError] = useState(null);

	const act = async (...args) => {
		setLoading(true);
		setError(null);

		try {
			const data = await handler(...args);
			setData(data);
			setLoading(false);
			return data;
		} catch (error) {
			setError(error.response);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (immediate) act();
		// eslint-disable-next-line
	}, []);

	return {
		data,
		loading,
		error,
		act,
	};
}
