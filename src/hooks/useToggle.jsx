import { useState } from 'react';

export const useToggle = (defaultValue) => {
	const [value, setValue] = useState(defaultValue);

	const toggleValue = (_value = null) => {
		console.log(value);
		if (_value === null) {
			_value = !value;
			setValue(_value);
		} else {
			setValue(_value);
		}
	};

	return [value, toggleValue];
};
