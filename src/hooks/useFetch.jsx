import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, mockWait = false) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		(async () => {
			const _items = (await axios.get(url)).data;
			if (mockWait) {
				setTimeout(() => {
					setItems(_items);
				}, Math.floor(Math.random() * 2000) + 1000);
			} else {
				setItems(_items);
			}
		})();
	}, []);

	return {
		items,
		totalItems: items.length,
		isLoading: items.length === 0,
	};
};
