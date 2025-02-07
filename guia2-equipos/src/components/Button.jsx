const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`select-none rounded-lg bg-blue-500 p-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 