// navbar
const toggleBtn = document.querySelector('.toggle');
const navbar = document.querySelector('.menuNav');

toggleBtn.addEventListener('click', function() {
  navbar.classList.toggle('show');
  toggleBtn.classList.toggle('show')
});



// perform message logic
function displayUserInfo(event) {
  event.preventDefault();

  var name = document.getElementById("personName").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var userInfo = document.getElementById("userInfo");

  if (!name || !address || !phone || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const phoneRegex = /^\+62\d{9,12}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid Indonesia phone number starting with '+62'.");
    return;
  }

  userInfo.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
}

const form = document.getElementById("messageForm");
form.addEventListener("submit", displayUserInfo);
