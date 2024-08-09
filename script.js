function makeCall() {
  window.location.href = "tel:+916280730669";
}

function sendMail() {
  let message = document.getElementById("message");
  window.location.href = `mailto:sharmaparv.2004@outlook.com?subject=Message&body=${message.value}`;
}

function startChat() {
  let message = document.getElementById("message");
  window.location.href = `https://wa.me/6280730669?text=${message.value}`;
}
