const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('validate');
const form = document.getElementById('stepByStepForm');
const dots = document.getElementsByClassName('progress-bar__dot');
const numberOfSteps = 4;
let currentStep = 1;

for (let i = 0; i < dots.length; ++i) {
  dots[i].addEventListener('click', () => {
    goToStep(i + 1);
  });
}

previousButton.onclick = goPrevious;
nextButton.onclick = goNext;

function goNext(e) {
  e.preventDefault();
  currentStep += 1;
  goToStep(currentStep);
}

function goPrevious(e) {
  e.preventDefault();
  currentStep -= 1;
  goToStep(currentStep);
}

function goToStep(stepNumber) {
  currentStep = stepNumber;

  let inputsToHide = document.getElementsByClassName('step');
  let inputs = document.getElementsByClassName(`step${currentStep}`);
  let indicators = document.getElementsByClassName('progress-bar__dot');

  for (let i = indicators.length - 1; i >= currentStep; --i) {
    indicators[i].classList.remove('full');
  }

  for (let i = 0; i < currentStep; ++i) {
    indicators[i].classList.add('full');
  }

  //hide all input
  for (let i = 0; i < inputsToHide.length; ++i) {
    hide(inputsToHide[i]);
  }

  //only show the right one
  for (let i = 0; i < inputs.length; ++i) {
    show(inputs[i]);
  }

  //if we reached final step
  if (currentStep === numberOfSteps) {
    previewContent();
    enable(previousButton);
    disable(nextButton);
    show(submitButton);
  }

  //else if first step
  else if (currentStep === 1) {
    disable(previousButton);
    enable(next);
    hide(submitButton);
  } else {
    enable(previousButton);
    enable(next);
    hide(submitButton);
  }
}

function enable(elem) {
  elem.classList.remove('disabled');
  elem.disabled = false;
}

function disable(elem) {
  elem.classList.add('disabled');
  elem.disabled = true;
}

function show(elem) {
  elem.classList.remove('hidden');
}

function hide(elem) {
  elem.classList.add('hidden');
}

function previewContent() {
  console.log('final');
  const preview = document.getElementById('preview');
  preview.innerHTML = '';
  const hrEl = document.createElement('hr');
  let formData = new FormData(form);
  for (let formEl of formData) {
    console.log(formEl);
  }
  //Name
  const nameLabel = document.createElement('label');
  const nameText = document.createTextNode(
    'Name : ' + formData.get('first_name') + ' ' + formData.get('lastname')
  );
  nameLabel.appendChild(nameText);
  preview.appendChild(nameLabel);
  preview.appendChild(hrEl);
  //Email
  const emailLabel = document.createElement('label');
  const emailText = document.createTextNode('Email : ' + formData.get('email'));
  emailLabel.appendChild(emailText);
  preview.appendChild(emailLabel);
  preview.appendChild(hrEl);
  //Phone
  const phoneLabel = document.createElement('label');
  const phoneText = document.createTextNode('Phone : ' + formData.get('phone'));
  phoneLabel.appendChild(phoneText);
  preview.appendChild(phoneLabel);
  preview.appendChild(hrEl);
  //Address
  const addressLabel = document.createElement('label');
  const addressText = document.createTextNode(
    'Address : ' + formData.get('address')
  );
  addressLabel.appendChild(addressText);
  preview.appendChild(addressLabel);
  preview.appendChild(hrEl);
  //Country
  const countryLabel = document.createElement('label');
  const countryText = document.createTextNode(
    'Phone : ' + formData.get('country')
  );
  countryLabel.appendChild(countryText);
  preview.appendChild(countryLabel);
  preview.appendChild(hrEl);
}
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
  event.preventDefault();
  alert(`Form Submitted! Time stamp: ${new Date()}`);
}
