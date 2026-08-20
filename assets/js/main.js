/**
 * RING 0 PRIVATE - Interactive UX & Micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Realtime Latency Counter Simulation (0.1ms ~ 0.4ms)
  const latencyBadge = document.getElementById('live-latency');
  if (latencyBadge) {
    setInterval(() => {
      const ping = (0.1 + Math.random() * 0.25).toFixed(2);
      latencyBadge.textContent = `${ping} ms`;
    }, 2800);
  }

  // Smooth button ripple / interactive highlight
  const buttons = document.querySelectorAll('.cta-btn');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Feature cards 3D tilt effect
  const cards = document.querySelectorAll('.feature-card, .metric-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const tiltX = (y / (rect.height / 2)) * -4;
      const tiltY = (x / (rect.width / 2)) * 4;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // Policy Modal Triggers (Google Ads Compliance)
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
});
