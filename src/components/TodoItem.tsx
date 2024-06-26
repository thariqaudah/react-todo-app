import { motion as m } from 'framer-motion';
import crossIcon from '../assets/images/icon-cross.svg';

interface TodoItemProps {
	id: string;
	content: string;
	isComplete: boolean;
	index: number;
	toggleChecked: (todoId: string, isChecked: boolean) => void;
	deleteTodo: (todoId: string) => void;
}

export default function TodoItem({
	index,
	id,
	content,
	isComplete,
	toggleChecked,
	deleteTodo,
}: TodoItemProps) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const todoId = e.target.value;
		const isChecked = e.target.checked;

		toggleChecked(todoId, isChecked);
	};

	return (
		<m.div
			className={`group relative w-full p-4 bg-lgtVeryLightGray flex items-center gap-5 border border-lgtVeryLightGrayishBlue outline-none lg:p-5 dark:bg-drkVeryDarkDesaturatedBlue dark:border-drkVeryDarkGrayishBlue ${
				index === 0 && 'rounded-t'
			}`}
			initial={{ opacity: 0, translateX: '10%' }}
			animate={{
				opacity: 1,
				translateX: '0%',
				transition: {
					type: 'spring',
					bounce: 0.5,
					opacity: { delay: 0.1 },
				},
			}}
		>
			<input
				id={`checkboxTodo-${id}`}
				type='checkbox'
				className={`appearance-none block p-3 border border-lgtLightGrayishBlue rounded-full cursor-pointer hover:border-lgtDarkGrayishBlue dark:border-drkDarkGrayishBlue dark:hover:border-drkLightGrayishBlueHover ${
					isComplete
						? 'relative bg-gradient-to-b from-gradientFrom to-gradientTo after:content-checkedIcon after:block after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2'
						: 'bg-transparent'
				}`}
				value={id}
				checked={isComplete}
				onChange={handleChange}
			/>
			<label
				className={`inline-block mt-1 text-base cursor-pointer lg:text-lg ${
					isComplete
						? 'line-through text-lgtLightGrayishBlue dark:text-drkDarkGrayishBlue'
						: 'text-lgtVeryDarkGrayishBlue dark:text-drkLightGrayishBlue'
				}`}
				htmlFor={`checkboxTodo-${id}`}
			>
				{content}
			</label>
			<button
				type='button'
				className='hidden ml-auto group-hover:inline-block'
				onClick={() => deleteTodo(id)}
			>
				<img src={crossIcon} alt='Close icon' />
			</button>
		</m.div>
	);
}
