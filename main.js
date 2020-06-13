window.onload = () => {

  //catch form inputs
  const inputNameElement = document.querySelector('#input-name');
  const inputEmailElement = document.querySelector('#input-email');
  const inputSubjectElement = document.querySelector('#input-subject');
  const inputMessageElement = document.querySelector('#input-message');

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

    if (isFormValidate.every(validation => true)) {

      const newFormMessage = {
        name: inputNameElement.value,
        email: inputEmailElement.value,
        subject: inputSubjectElement.value,
        message: inputMessageElement.value,
      };

      localStorage.setItem('message', JSON.stringify(newFormMessage));      
    };
  };
};