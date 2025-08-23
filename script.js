// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger?.addEventListener('click', () => {
  const open = menu.style.display === 'flex';
  menu.style.display = open ? 'none' : 'flex';
  menu.style.flexDirection = 'column';
  menu.style.gap = '12px';
});

// Fake demo generator
const out = document.getElementById('out');
document.getElementById('genBtn')?.addEventListener('click', () => {
  const pitches = [
    "ИИ‑ассистент для e‑commerce: анализ корзины, предиктивные рекомендации и автогенерация описаний. MVP за 2 недели, рост конверсии до 12%.",
    "Платформа генерации медиа: титры, субтитры, сценарии и раскадровки. Интеграция с Telegram и облачным сториджем.",
    "RAG‑поиск по документации компании: быстрые ответы и ссылки на источники. Снижение нагрузки на поддержку на 35%."
  ];
  const pick = pitches[Math.floor(Math.random() * pitches.length)];
  out.textContent = "→ " + pick;
});

// button email
const form = document.getElementById('ctaForm');
const ctaOk = document.getElementById('cta-ok');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('send_email.php', {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      ctaOk.style.display = 'block';
      console.log(data);
      form.reset();
    })
    .catch(error => {
      alert('Ошибка отправки письма.');
      console.error(error);
    });
});

