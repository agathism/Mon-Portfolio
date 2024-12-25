const button = document.getElementById('menu-button');
  const dropdown = document.getElementById('menu-dropdown');

  button.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });