import { useEffect, useMemo, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { AppHeader } from './components/AppHeader';
import InputTodo from './components/InputTodo';
import TodoItem from './components/TodoItem';
import ActionItem from './components/ActionItem';

type TodoItem = {
	id: string;
	content: string;
	isComplete: boolean;
};

type TodoList = TodoItem[];

type Filter = 'all' | 'active' | 'completed';

export default function App() {
	const [todos, setTodos] = useState<TodoList | null>(null);
	const [isBgDark, setIsBgDark] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState<Filter>('all');

	const filteredTodos = useMemo(() => {
		switch (selectedFilter) {
			case 'active':
				return todos?.filter((todo) => !todo.isComplete);
			case 'completed':
				return todos?.filter((todo) => todo.isComplete);
			default:
				return todos;
		}
	}, [todos, selectedFilter]);

	useEffect(() => {
		const data = fetchTodos();

		setTodos(data);
	}, []);

	function handleDragEnd(result: any) {
		if (!result.destination) return;

		if (!todos) return;

		const newItems = [...todos];

		const [removed] = newItems.splice(result.source.index, 1);
		newItems.splice(result.destination.index, 0, removed);
		setTodos(newItems);
	}

	function toggleChecked(id: string, isChecked: boolean) {
		const updatedTodos =
			todos &&
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						isComplete: isChecked,
					};
				}

				return todo;
			});

		setTodos(updatedTodos);
	}

	function addTodo(newTodo: TodoItem) {
		const updatedTodoList = todos && [newTodo, ...todos];
		setTodos(updatedTodoList);
	}

	function fetchTodos(): TodoList {
		const todosData = [
			{
				id: '1',
				content: 'Complete Todo App in Frontend Mentor',
				isComplete: false,
			},
			{
				id: '2',
				content: 'Jog around the park 3x',
				isComplete: true,
			},
			{
				id: '3',
				content: '10 minutes meditation',
				isComplete: false,
			},
			{
				id: '4',
				content: 'Pick up groceries',
				isComplete: true,
			},
			{
				id: '5',
				content: 'Read for 1 hour',
				isComplete: false,
			},
		];

		return todosData;
	}

	function deleteTodo(todoId: string) {
		const updatedTodos =
			todos && todos.filter((todo) => todo.id !== todoId);
		setTodos(updatedTodos);
	}

	function filterTodos(type: Filter) {
		setSelectedFilter(type);
	}

	function clearCompletedTodos(): void {
		const updatedTodos = todos && todos.filter((todo) => !todo.isComplete);

		setTodos(updatedTodos);
	}

	return (
		<main
			className={`relative py-12 lg:py-20 after:content-[""] after:absolute after:left-0 after:top-0 after:-z-10 after:block after:w-full after:h-[40vh] after:bg-cover after:bg-no-repeat after:bg-center ${
				isBgDark ? 'after:bg-desktop-dark' : 'after:bg-desktop-light'
			}`}
		>
			<div className='container'>
				{/* Title */}
				<AppHeader changeBg={(bool: boolean) => setIsBgDark(bool)} />

				{/* Content */}
				<div className='pt-10'>
					{/* Input todo */}
					<InputTodo addTodo={addTodo} />

					{/* Todo list */}
					<div className='pt-8'>
						{filteredTodos && (
							<DragDropContext onDragEnd={handleDragEnd}>
								<Droppable droppableId='droppable'>
									{(provided) => (
										<ul
											{...provided.droppableProps}
											ref={provided.innerRef}
										>
											{filteredTodos.map(
												(todo, index) => (
													<Draggable
														key={todo.id}
														draggableId={todo.id}
														index={index}
													>
														{(provided) => (
															<li
																ref={
																	provided.innerRef
																}
																{...provided.draggableProps}
																{...provided.dragHandleProps}
															>
																<TodoItem
																	index={
																		index
																	}
																	id={todo.id}
																	content={
																		todo.content
																	}
																	isComplete={
																		todo.isComplete
																	}
																	toggleChecked={
																		toggleChecked
																	}
																	deleteTodo={
																		deleteTodo
																	}
																/>
															</li>
														)}
													</Draggable>
												)
											)}
											{provided.placeholder}
										</ul>
									)}
								</Droppable>
							</DragDropContext>
						)}

						{/* Filter action */}
						<ActionItem
							countTodos={todos ? todos.length : 0}
							selectedFilter={selectedFilter}
							filterTodos={filterTodos}
							clearCompletedTodos={clearCompletedTodos}
						/>
					</div>

					<p className='text-sm font-medium mt-12 text-center text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue'>
						Drag and drop to reorder list
					</p>
				</div>
			</div>
		</main>
	);
}
