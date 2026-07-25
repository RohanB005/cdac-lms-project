const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const requestForm = document.getElementById('requestForm');
const formMessage = document.getElementById('formMessage');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav?.classList.toggle('show');
});

requestForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const role = formData.get('role')?.toString();

  if (!name || !email) {
    formMessage.textContent = 'Please complete all fields.';
    return;
  }

  formMessage.textContent = `Thanks, ${name}! Your ${role} request has been received.`;
  form.reset();
});
