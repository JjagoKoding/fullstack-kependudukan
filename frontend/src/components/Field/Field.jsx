import "./Field.css";

const Field = ({ placeHolder, type, data, contentLabel, setValue, setOnChange, setError }) => {
  return (
    <div className="form-group">
      <label htmlFor={`input_${data}`}>{contentLabel}</label>
      <input
        type={type}
        id={`input_${data}`}
        placeholder={placeHolder}
        autoComplete="off"
        value={setValue}
        onChange={setOnChange}
      />
      <span className="error-input" id={`error_${data}`}>{setError && setError}</span>
    </div>
  );
};

export default Field;
