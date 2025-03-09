export function Button({ children, onClick, className, disabled }) {
    return (
      <button
        className={`px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  