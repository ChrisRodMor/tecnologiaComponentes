function CustomInput({label, disabled, tipo}) {
    return (
      <>
        <label htmlFor="" style={{textAlign: 'left'}}>{label}</label>
        <input style={{height: '2em'}} type={tipo} disabled={disabled}/>
      </>
    );
  }
  
  
  export default CustomInput;