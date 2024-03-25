import { useEffect, useMemo } from 'react';
import iconMoon from '../assets/images/icon-moon.svg';
import iconSun from '../assets/images/icon-sun.svg';
import useDarkMode from '../hooks/useDarkMode';

export const AppHeader: React.FC<{ changeBg: (bool: boolean) => void }> = ({
	changeBg,
}) => {
	const { darkMode, toggleDarkMode } = useDarkMode();

	const toggleIcon = useMemo(() => {
		return darkMode ? iconSun : iconMoon;
	}, [darkMode]);

	useEffect(() => {
		changeBg(darkMode);
	}, [darkMode]);

	function handleToggle(): void {
		toggleDarkMode();
		changeBg(darkMode);
	}

	return (
		<div className='flex items-center justify-between'>
			<h1 className='text-3xl font-bold tracking-[0.2em] text-lgtVeryLightGray uppercase lg:text-4xl'>
				Todo
			</h1>

			<button type='button' onClick={handleToggle}>
				<img src={toggleIcon} alt='theme icon' />
			</button>
		</div>
	);
};
