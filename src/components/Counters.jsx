import Counter from "./Counter";

const Counters = ({
  counters,
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div>
      {counters.length === 0 ? null : (
        <button
          onClick={() => onReset()}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      )}
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
