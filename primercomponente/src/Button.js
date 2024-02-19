function Button({ text, disabled }) {
  return (
    <button type="button" disabled={disabled}> {text} </button>
  );
}

export default Button;
