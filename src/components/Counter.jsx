const Counter = ({ counter, onDelete, onIncrement, onDecrement }) => {
  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  const getBadgeClasses = (count) => {
    let classes = "m-2 badge badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses(counter.value)}>{formatCount()}</span>
      </div>
      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
