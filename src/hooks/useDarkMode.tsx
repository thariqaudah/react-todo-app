import { useEffect, useState } from 'react';

export default function useDarkMode() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	function toggleDarkMode(): void {
		setDarkMode(!darkMode);
	}

	return {
		darkMode,
		toggleDarkMode,
	};
}
