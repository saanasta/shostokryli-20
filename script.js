const targetDate = new Date('2026-09-19T08:00:00+03:00').getTime();

const $ = (id) => document.getElementById(id);

function pad(value) {
  return String(Math.max(0, value)).padStart(2, '0');
}

function updateCountdown() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    $('days').textContent = '00';
    $('hours').textContent = '00';
    $('minutes').textContent = '00';
    $('seconds').textContent = '00';
    document.querySelector('.countdown-label').textContent = 'сьогодні зустрічаємося о 08:00';
    return;
  }

  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  $('days').textContent = String(days).padStart(2, '0');
  $('hours').textContent = pad(hours);
  $('minutes').textContent = pad(minutes);
  $('seconds').textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const envelope = $('envelope');
const seal = $('seal');

seal.addEventListener('click', () => {
  envelope.classList.add('open');
});
