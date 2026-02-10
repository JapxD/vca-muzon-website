interface ModalInputProp {
  value: string;
  onChange: (value: string) => void; // callback to update parent
  label?: string;
  placeholder?: string;
  message?: string;
}

const ModalInput = ({
  value,
  onChange,
  label,
  placeholder,
  message
}: ModalInputProp) => {
  return (
    <div className="w-full flex items-center gap-5">
      {label && (
        <label
          htmlFor={label}
          className="text-[var(--color-text-primary)] text-xl font-light"
        >
          {label}
        </label>
      )}

      <div className="w-full">
        <input
          id={label}
          className="w-full bg-white
    border-1 border-[var(--color-text-  primary)]
    rounded-md text-[var(--color-text-primary)] p-2 placeholder-[var(--color-text-secondary)]"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {message && <p className="text-sm text-red-500">{message}</p>}
      </div>

    </div>
  );
};

export default ModalInput;
