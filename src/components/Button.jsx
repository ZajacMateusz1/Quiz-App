export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-500 text-white p-1 rounded-md text-lg w-1/2"
      {...props}
    >
      {children}
    </button>
  );
}
