const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
  document.getElementById('logo-img').src = ('Media/Dark-Logo.png');
  if (document.body.classList.contains('dark-theme')) {
    document.getElementById('logo-img').src = ('Media/Light-Logo.png');
  }
});