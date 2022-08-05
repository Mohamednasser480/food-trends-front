const Checkbox = ({ label, children }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          // checked="checked"
          className="checkbox checkbox-accent mx-2 h-4 w-4"
        />
        <span className="label-text">{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
