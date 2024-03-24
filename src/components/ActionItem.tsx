type Filter = 'all' | 'active' | 'completed';

type ActionItemProps = {
	countTodos: number;
	selectedFilter: Filter;
	filterTodos: (string: Filter) => void;
	clearCompletedTodos: () => void;
};

export default function ActionItem({
	countTodos,
	selectedFilter,
	filterTodos,
	clearCompletedTodos,
}: ActionItemProps) {
	return (
		<div
			className={`w-full flex items-center justify-between px-5 py-3 text-sm bg-lgtVeryLightGray border border-lgtVeryLightGrayishBlue rounded-b shadow-sm`}
		>
			{/* Items left info */}
			<span className='text-lgtDarkGrayishBlue font-medium'>
				{countTodos} items left
			</span>

			{/* Filter action button */}
			<div className='flex items-center gap-4'>
				<button
					type='button'
					className={`font-semibold hover:text-lgtVeryDarkGrayishBlue ${
						selectedFilter === 'all'
							? 'text-primaryColor'
							: 'text-lgtDarkGrayishBlue'
					}`}
					onClick={() => filterTodos('all')}
				>
					All
				</button>
				<button
					type='button'
					className={`font-semibold hover:text-lgtVeryDarkGrayishBlue ${
						selectedFilter === 'active'
							? 'text-primaryColor'
							: 'text-lgtDarkGrayishBlue'
					}`}
					onClick={() => filterTodos('active')}
				>
					Active
				</button>
				<button
					type='button'
					className={`font-semibold hover:text-lgtVeryDarkGrayishBlue ${
						selectedFilter === 'completed'
							? 'text-primaryColor'
							: 'text-lgtDarkGrayishBlue'
					}`}
					onClick={() => filterTodos('completed')}
				>
					Completed
				</button>
			</div>

			{/* Clear action button */}
			<button
				type='button'
				className='text-lgtDarkGrayishBlue font-medium hover:text-lgtVeryDarkGrayishBlue'
				onClick={clearCompletedTodos}
			>
				Clear Completed
			</button>
		</div>
	);
}
