window.onload = () => {

  //catch form inputs
  const inputNameElement = document.querySelector('#input-name');
  const inputEmailElement = document.querySelector('#input-email');
  const inputSubjectElement = document.querySelector('#input-subject');
  const inputMessageElement = document.querySelector('#input-message');

  //catch the alert form element
  const alertFormElement = document.querySelector('#form-alert');
  alertFormElement.classList.add("d-none");

  //form submit button
  const sendFormElement = document.querySelector('#form-submit');

  //form validation
  sendFormElement.onclick = event => {

    const isFormValidate = [];

    event.preventDefault();

    if (!inputNameElement.value) {
      inputNameElement.classList.add("input-invalid");
      isFormValidate.push(false);
    } else {
      isFormValidate.push(true);
    };

    if (!inputEmailElement.value) {
      inputEmailElement.classList.add("input-invalid");
      isFormValidate.push(false);
    } else {
      isFormValidate.push(true);
    };

    if (!inputSubjectElement.value) {
      inputSubjectElement.classList.add("input-invalid");
      isFormValidate.push(false);
    } else {
      isFormValidate.push(true);
    };

    if (!inputMessageElement.value) {
      inputMessageElement.classList.add("input-invalid");
      isFormValidate.push(false);
    } else {
      isFormValidate.push(true);
    };

    if (isFormValidate.some(validation => validation === false)) {
      alertFormElement.classList.add("alert-danger");
      alertFormElement.classList.remove("d-none");
      alertFormElement.innerHTML = " Há campos em branco. Verifique e reenvie o formulário de contato...";
    };

    console.log(isFormValidate.every(validation => validation === true));

    if (isFormValidate.every(validation => validation === true)) {
      alertFormElement.classList.add("alert-success");
      alertFormElement.classList.remove("d-none");
      alertFormElement.innerHTML = "Mensagem enviada com sucesso! Obrigado pelo seu feedback!";

      const newFormMessage = {
        name: inputNameElement.value,
        email: inputEmailElement.value,
        subject: inputSubjectElement.value,
        message: inputMessageElement.value,
      };
      
    };
  };
};