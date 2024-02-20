function Button({ text, disabled }) {
  return (
    <button style={{padding: '5px 13px', color: 'white', cursor: 'pointer', backgroundColor: 'purple'}} type="button" disabled={disabled}> {text} </button>
  );
}

export default Button;
