function CustomInput({label, disabled, tipo}) {
    return (
      <>
        <label htmlFor="">{label}</label>
        <input type={tipo} disabled={disabled} />
      </>
    );
  }
  
  
  export default CustomInput;