const FILTER_LABELS = {
  all: 'All Tasks',
  active: 'Active Tasks',
  completed: 'Completed Tasks',
};

function TaskCounter({ filter, visibleCount, totalCount, completedCount, activeCount }) {
  return (
    <div className="task-counter">
      <div>
        <h2>{FILTER_LABELS[filter]}</h2>
        <p>
          {visibleCount} of {totalCount} tasks
        </p>
      </div>
      <div className="task-counter__summary">
        <p>
          Active <span>{activeCount}</span>
        </p>
        <p>
          Completed <span>{completedCount}</span>
        </p>
      </div>
    </div>
  );
}

export default TaskCounter;
