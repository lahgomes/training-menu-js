const menuButton = document.querySelector('[data-button]')
const menu = document.querySelector('[data-menu]')

menuButton.addEventListener('click', function () {
  menu.classList.toggle('close')
})
