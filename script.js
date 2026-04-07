document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  const reviewContainer = document.querySelector('#review-list');
  const fallbackReviews = [
    {
      name: "Local Customer",
      text: "Fast response, professional work, and the convenience of having service done at my location made the whole process easy.",
    },
    {
      name: "Central NJ Driver",
      text: "Clear communication and honest service. The quote process was simple and the work was completed without the hassle of a shop visit.",
    },
    {
      name: "Repeat Customer",
      text: "Great option when you need mobile service. Easy to schedule and convenient for busy days at home or work.",
    }
  ];

  if (reviewContainer) {
    reviewContainer.innerHTML = fallbackReviews.map(r => `
      <article class="card">
        <div class="stars">★★★★★</div>
        <blockquote>${r.text}</blockquote>
        <p><strong>${r.name}</strong></p>
      </article>
    `).join('');
  }
});
