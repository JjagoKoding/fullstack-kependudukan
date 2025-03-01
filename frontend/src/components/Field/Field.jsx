import "./Field.css";

const Field = ({
  placeHolder,
  type,
  data,
  contentLabel,
  setValue,
  setOnChange,
  setError,
  children,
  selectValue,
  selectDefaultValue
}) => {
  return (
    <div className="form-group">
      <label htmlFor={`input_${data}`}>{contentLabel}</label>
      {type === "text" && (
        <input
          type={type}
          id={`input_${data}`}
          placeholder={placeHolder}
          autoComplete="off"
          value={setValue}
          onChange={setOnChange}
        />
      )}
      {type === "select" && <select id={`input_${data}`} value={selectValue} defaultValue={selectDefaultValue} onChange={setOnChange}>{children}</select>}
      <span className="error-input" id={`error_${data}`}>
        {setError && setError}
      </span>
    </div>
  );
};

export default Field;
