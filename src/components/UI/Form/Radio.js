const Radio = ({ name, className, children, checked, onChange, value }) => {
  return (
    <div className="mx-2 flex items-center">
      <input
        type="radio"
        name={name}
        className={`radio radio-accent ${className}`}
        onChange={onChange}
        checked={checked === value}
        value={value}
      />
      <h3 className="mx-2 text-lg">{children}</h3>
    </div>
  );
};

export default Radio;
