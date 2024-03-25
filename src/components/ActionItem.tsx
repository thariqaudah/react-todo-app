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
		<>
			<div
				className={`w-full flex items-center justify-between px-5 py-3 text-xs bg-lgtVeryLightGray border border-lgtVeryLightGrayishBlue rounded-b shadow-sm lg:text-sm dark:bg-drkVeryDarkDesaturatedBlue dark:border-drkVeryDarkGrayishBlue`}
			>
				{/* Items left info */}
				<span className='text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue font-medium'>
					{countTodos} items left
				</span>

				{/* Filter action button */}
				<div className='hidden items-center gap-4 lg:flex'>
					<button
						type='button'
						className={`font-semibold hover:text-lgtVeryDarkGrayishBlue dark:hover:text-drkLightGrayishBlueHover ${
							selectedFilter === 'all'
								? 'text-primaryColor'
								: 'text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue'
						}`}
						onClick={() => filterTodos('all')}
					>
						All
					</button>
					<button
						type='button'
						className={`font-semibold hover:text-lgtVeryDarkGrayishBlue dark:hover:text-drkLightGrayishBlueHover ${
							selectedFilter === 'active'
								? 'text-primaryColor'
								: 'text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue'
						}`}
						onClick={() => filterTodos('active')}
					>
						Active
					</button>
					<button
						type='button'
						className={`font-semibold hover:text-lgtVeryDarkGrayishBlue dark:hover:text-drkLightGrayishBlueHover ${
							selectedFilter === 'completed'
								? 'text-primaryColor'
								: 'text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue'
						}`}
						onClick={() => filterTodos('completed')}
					>
						Completed
					</button>
				</div>

				{/* Clear action button */}
				<button
					type='button'
					className='text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue font-medium hover:text-lgtVeryDarkGrayishBlue dark:hover:text-drkLightGrayishBlueHover'
					onClick={clearCompletedTodos}
				>
					Clear Completed
				</button>
			</div>

			{/* Only show in mobile screen */}
			<div
				className={`w-full flex items-center justify-center px-5 py-3 mt-4 text-xs bg-lgtVeryLightGray border border-lgtVeryLightGrayishBlue rounded-md shadow-sm lg:text-sm lg:hidden dark:bg-drkVeryDarkDesaturatedBlue dark:border-drkVeryDarkGrayishBlue`}
			>
				{/* Filter action button */}
				<div className='flex justify-center items-center gap-4'>
					<button
						type='button'
						className={`font-semibold hover:text-lgtVeryDarkGrayishBlue dark:hover:text-drkLightGrayishBlueHover ${
							selectedFilter === 'all'
								? 'text-primaryColor'
								: 'text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue'
						}`}
						onClick={() => filterTodos('all')}
					>
						All
					</button>
					<button
						type='button'
						className={`font-semibold hover:text-lgtVeryDarkGrayishBlue dark:hover:text-drkLightGrayishBlueHover ${
							selectedFilter === 'active'
								? 'text-primaryColor'
								: 'text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue'
						}`}
						onClick={() => filterTodos('active')}
					>
						Active
					</button>
					<button
						type='button'
						className={`font-semibold hover:text-lgtVeryDarkGrayishBlue dark:hover:text-drkLightGrayishBlueHover ${
							selectedFilter === 'completed'
								? 'text-primaryColor'
								: 'text-lgtDarkGrayishBlue dark:text-drkDarkGrayishBlue'
						}`}
						onClick={() => filterTodos('completed')}
					>
						Completed
					</button>
				</div>
			</div>
		</>
	);
}
