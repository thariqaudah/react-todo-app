import { useState } from 'react';

type InputTodoProps = {
	addTodo: ({}: any) => void;
};

export default function InputTodo({ addTodo }: InputTodoProps) {
	const [newTodo, setNewTodo] = useState('');

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();

		if (!newTodo) {
			return;
		}

		const newTodoItem = {
			id: Math.floor(Math.random() * 100).toString(),
			content: newTodo,
			isComplete: false,
		};

		addTodo(newTodoItem);

		setNewTodo('');
	};

	return (
		<form
			className='relative before:content-[""] before:block before:p-3 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:ml-4 before:border before:border-lgtLightGrayishBlue before:rounded-full'
			onSubmit={handleSubmit}
		>
			<input
				className='block w-full p-5 pl-[60px] rounded bg-lgtVeryLightGray text-lgtVeryDarkGrayishBlue shadow text-lg font-normal outline-none'
				placeholder='Create new todo...'
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
		</form>
	);
}
