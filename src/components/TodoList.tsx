import TodoItem from './TodoItem';
import ActionItem from './ActionItem';

type TodoProps = {
	id: string;
	content: string;
	isComplete: boolean;
};

type TodosProps = {
	todos: TodoProps[];
};

export default function TodoList({ todos }: TodosProps) {
	return (
		<div className='pt-8'>
			{todos &&
				todos.map((todo, index) => (
					<TodoItem key={todo.id} todo={todo} index={index} />
				))}

			{todos && todos && todos.length && <ActionItem />}
		</div>
	);
}
