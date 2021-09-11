form.addEventListener('submit', logSubmit);

function logSubmit(event) {
  console.log('New form submit');
  event.preventDefault();
  ZOHO.CREATOR.init().then(function() {
    let myForm = document.getElementById('stepByStepForm');
    let myFormData = new FormData(myForm);

    let formData = {
      data: {
        Name: {
          first_name: myFormData.get('first_name'),
          last_name: myFormData.get('last_name')
        },
        Email: myFormData.get('email'),
        Phone_Number: '+1' + myFormData.get('phone'),
        Address: {
          address_line_1: myFormData.get('address'),
          country: myFormData.get('country')
        }
      }
    };

    let config = {
      formName: 'Contact',
      data: formData
    };

    ZOHO.CREATOR.API.addRecord(config).then(function(res) {
      console.log(res);
    });
  });

  $('input').savy('destroy');
  //location.reload();
}
