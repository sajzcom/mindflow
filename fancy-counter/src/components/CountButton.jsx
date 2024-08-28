import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ type, setCount, locked }) {
  const handleClick = (e) => {
    setCount((prev) => {
      // type === 'minus' ? prev - 1 : prev + 1;
      if (type === 'minus') {
        const newCount = prev - 1;
        if (newCount < 0) {
          // Prevent negative values
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          // Prevent values greater than 5
          return 5;
        }
        return newCount;
      }
    });

    e.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
