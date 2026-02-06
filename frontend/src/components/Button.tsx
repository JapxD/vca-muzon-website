interface ButtonProp {
  title: string;
  handleClick: () => void;
  className?: string;
}

const Button = ({ title, handleClick, className }: ButtonProp) => {
  return (
    <button
      className={`bg-(image:--gradient) hover:bg-(image:--gradient-hover)
    border-1 border-[var(--border-card)]
    border-t-[var(--highlight)]
    shadow-(--shadow) text-[var(--text)]
    rounded-md px-5 py-3 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
