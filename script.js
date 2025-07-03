document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const email = document.getElementById('email').value.trim();   
  const messageDiv = document.getElementById('message');
  const list = document.getElementById('myList');
  const listItem = document.createElement('li');

  if (validateInput(name, age, email)) {
    messageDiv.textContent = "You registered successfully!";
    messageDiv.style.color = "green";

    
    listItem.textContent = `Name:${name}, Age: ${age}, Email: ${email})`;
    list.appendChild(listItem);

    document.getElementById('myForm').reset();
  } else if (Number(age) <= 18) {
    messageDiv.textContent = "Your age must be more than 18";
    messageDiv.style.color = "red";
  } else {
    messageDiv.textContent = "Please fill all fields correctly";
    messageDiv.style.color = "red";
  }
});

function validateInput(name, age, email) {
  if (!name || !age || !email) return false;

  const ageNum = Number(age);
  const validAge = ageNum > 18;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const validEmail = emailRegex.test(email);

  return validAge && validEmail;
}
