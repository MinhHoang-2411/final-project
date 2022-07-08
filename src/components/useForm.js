import { useState } from "react";
function useForm(initValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };
  const resetForm = () => {
    setValues(initValues);
    setErrors({});
  };
  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
}

function Form({ children, ...others }) {
  return (
    <form autoComplete="off" noValidate {...others}>
      {children}
    </form>
  );
}

export { Form, useForm };
