import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		(async () => {
			setItems((await axios.get(url)).data);
		})();
	}, []);

	return [items];
};