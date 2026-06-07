const typeSelect = document.getElementById('type');
const studentIdField = document.getElementById('studentIdField');
const accessCodeField = document.getElementById('accessCodeField');
const studentIdInput = document.getElementById('studentId');
const accessCodeInput = document.getElementById('accessCode');
const output = document.getElementById('output');

typeSelect.addEventListener('change', function () {
  const val = this.value;

  if (val === 'student') {
    studentIdField.hidden = false;
    accessCodeField.hidden = true;
    studentIdInput.required = true;
    accessCodeInput.required = false;
  } else if (val === 'guest') {
    accessCodeField.hidden = false;
    studentIdField.hidden = true;
    accessCodeInput.required = true;
    studentIdInput.required = false;
  } else {
    studentIdField.hidden = true;
    accessCodeField.hidden = true;
    studentIdInput.required = false;
    accessCodeInput.required = false;
  }
});

document.getElementById('ticketForm').addEventListener('submit', function (e) {
  e.preventDefault();
  output.textContent = '';

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const type = typeSelect.value;
  const eventDate = document.getElementById('eventDate').value;

  if (type === 'student') {
    const id = studentIdInput.value.trim();
    if (!/^\d{9}$/.test(id)) {
      output.textContent = 'Student I# must be 9 digits';
      return;
    }
  }

  const typeLabels = { student: 'Student', guest: 'Guest' };

  output.innerHTML = `
    <h2>Ticket Submitted</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Type: ${typeLabels[type]}</p>
    <p>Event Date: ${eventDate}</p>
  `;
});