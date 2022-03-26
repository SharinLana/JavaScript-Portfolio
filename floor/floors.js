const cards = document.querySelectorAll('.card');

//Activating project containers on click (for the mobile version)
cards.forEach(card => {
  card.addEventListener('click', () => {
  card.style.classList.toggle('card:hover');
})
})