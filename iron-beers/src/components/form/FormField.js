import React from 'react';

const FormField = (props) => {
  const {label, 
    name, 
    onChange, 
    onBlur, 
    valClassName, 
    value, 
    error, 
    touch, 
    inputType, 
    errorSms} = props

    const inputAttr = {
      autoComplete: 'off',
      className: `form-control ${valClassName}`,
      name,
      value: value,
      onBlur,
      onChange
    }

  return (
    <div className="form-group">
      <label>{label}</label>

      {(inputType==='textarea') ?
        <textarea rows={6} {...inputAttr}> </textarea> :
      <input {...inputAttr}/>}

      {touch && !error && (
      <small className="valid-feedback">Looking Good!</small>  
      )}

      {touch && error && (
        <small className="invalid-feedback">{errorSms}</small>
      )}
     </div>  
  )
}

export default FormField;