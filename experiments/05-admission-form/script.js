const form = document.querySelector('#admission-form');
const message = document.querySelector('#message');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const applicant = data.get('fullName').trim();
  message.textContent = `Thank you, ${applicant}! Your demo application has been validated. No data was sent to a server.`;
  form.reset();
});
