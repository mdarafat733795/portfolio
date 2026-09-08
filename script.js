document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('project-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('project-title').value.trim();
  const category = document.getElementById('project-category').value.trim() || 'PERSONAL PROJECT';
  const image = document.getElementById('project-image').files[0];
  const card = document.createElement('article');
  card.className = 'project-card user-project';
  card.innerHTML = `<div class="project-number">NEW</div><div><p>${category.toUpperCase()}</p><h3>${title}</h3></div><span class="arrow">↗</span>`;
  if (image) card.style.backgroundImage = `url("${URL.createObjectURL(image)}")`;
  document.getElementById('project-grid').prepend(card);
  event.target.reset();
  event.target.closest('details').open = false;
});
