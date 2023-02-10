// Declare Variables

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu-id');

// Create event listener functions
const showMenu = () => {
  menu.classList.replace('hide', 'show');
};

const hideMenu = () => {
  menu.classList.replace('show', 'hide');
};

// Add event listeners to html elements
menuButton.addEventListener('click', showMenu);

const menuItems = document.getElementsByClassName('menu-item');
for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', hideMenu);
}