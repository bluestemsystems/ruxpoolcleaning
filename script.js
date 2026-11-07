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

// Quote form: sends to Formspree without leaving the page
const form = document.getElementById('quote-form');
const error = form.querySelector('.form-error');
const thanks = document.getElementById('quote-thanks');
const button = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').trim();
  const address = (data.get('address') || '').trim();
  const phone = (data.get('phone') || '').trim();
  const email = (data.get('email') || '').trim();
  if (!name || !address || (!phone && !email)) {
    error.textContent = 'Please add your name, address, and a phone number or email.';
    error.hidden = false;
    return;
  }
  error.hidden = true;

  // Send the extras as one readable line
  const extras = data.getAll('extras');
  data.delete('extras');
  data.append('extras', extras.length ? extras.join(', ') : 'None');
  data.set('_subject', `Quote request: ${data.get('service')} (${name})`);

  button.disabled = true;
  button.textContent = 'Sending...';
  try {
    const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('Request failed');
    form.hidden = true;
    thanks.hidden = false;
  } catch (err) {
    error.innerHTML = 'Sorry, that did not go through. Please call or text <a href="tel:+18307439406">(830) 743-9406</a> or email <a href="mailto:ruxpoolcleaning@gmail.com">ruxpoolcleaning@gmail.com</a>.';
    error.hidden = false;
    button.disabled = false;
    button.textContent = 'Send my request';
  }
});
