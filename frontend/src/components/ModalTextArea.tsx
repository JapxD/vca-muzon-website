interface ModalTextAreaProp {
  value: string;
  onChange: (value: string) => void; // callback to update parent
  label?: string;
  placeholder?: string;
  row?: number;
}

const ModalTextArea = ({
  value,
  onChange,
  label,
  placeholder,
  row,
}: ModalTextAreaProp) => {
  return (
    <div className="w-full flex gap-5">
      {label && (
        <label
          htmlFor={label}
          className="text-[var(--text)] text-xl font-light"
        >
          {label}
        </label>
      )}

      <textarea
        id={label}
        rows={row ? row : 2}
        className="w-full bg-white
    border-1 border-[var(--color-text-primary)]
    rounded-md text-[var(--color-text-primary)] p-2 placeholder-[var(--color-text-secondary)]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ModalTextArea;
