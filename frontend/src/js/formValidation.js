
const formValidation = (data) => {
  let objError = {
    error: false,
    message: ""
  };

  if ((data.title === undefined) || (data.title.trim() === "")) {
    objError.message = "Debe completar todos los campos.";
    objError.error = true;
    return objError;
  }
    
  if (data.body === undefined || (data.body.trim() === "")) {
    objError.message = "Debe completar todos los campos.";
    objError.error = true;
    return objError;
  }

  return objError;
}

module.exports = {formValidation};