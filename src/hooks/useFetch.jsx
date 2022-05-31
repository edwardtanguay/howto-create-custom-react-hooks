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
				}, 3000);
			} else {
				setItems(_items);
			}
		})();
	}, []);

	return [items, items.length, items.length === 0];
};
