export default function ControlButton({ children, ...props }) {
  return (
    <button
      className="bg-blue-500 text-white py-1 px-3 rounded-sm font-bold"
      {...props}
    >
      {children}
    </button>
  );
}
