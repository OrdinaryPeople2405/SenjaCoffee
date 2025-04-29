const themeSwitch = document.querySelector('input[type="checkbox"]');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
  document.getElementById('logo-img').src = ('Media/Light-logo(new).png');
  document.getElementById('logo-img-mobile').src = ('Media/Light-logo(new).png');
  document.getElementById('logo-img-footer').src = ('Media/Light-logo(new).png');
  if (document.body.classList.contains('dark-theme')) {
    document.getElementById('logo-img').src = ('Media/Dark-logo(new).png');
    document.getElementById('logo-img-mobile').src = ('Media/Dark-logo(new).png');
    document.getElementById('logo-img-footer').src = ('Media/Dark-logo(new).png');
  }
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name == "" && email == "" && message == "") {
    alert("Every field helps us help you — complete them all before you're through!");
    return false;
  } else {
    alert("All filled in let the chat begin");
    return true;
  }
}