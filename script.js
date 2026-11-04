// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form: builds an email with the details and opens the visitor's mail app
const form = document.getElementById('quote-form');
const error = form.querySelector('.form-error');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').trim();
  const address = (data.get('address') || '').trim();
  if (!name || !address) { error.hidden = false; return; }
  error.hidden = true;

  const extras = data.getAll('extras');
  const body = [
    `Name: ${name}`,
    `Phone: ${data.get('phone') || ''}`,
    `Address: ${address}`,
    `Service: ${data.get('service')}`,
    `Property: ${data.get('property')}`,
    `Pool size: ${data.get('size')}`,
    `Extras: ${extras.length ? extras.join(', ') : 'None'}`,
    '',
    `Notes: ${data.get('notes') || ''}`
  ].join('\n');

  const subject = `Quote request: ${data.get('service')} (${name})`;
  window.location.href =
    `mailto:ruxpoolcleaning@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
