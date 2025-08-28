export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-500 text-white p-1 rounded-md text-lg w-1/2 font-bold md:w-1/3 md:hover:bg-blue-700 transition md:cursor-pointer md:p-1.5 md:text-xl"
      {...props}
    >
      {children}
    </button>
  );
}
