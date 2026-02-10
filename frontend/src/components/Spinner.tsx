const Spinner = () => {
  return (
    <div className="flex justify-center items-center self-center">
      <div className="h-8 w-8 animate-spin rounded-full border-3 border-[var(--color-primary-dark)] border-t-[var(--color-primary)]"></div>
    </div>
  );
};

export default Spinner;
