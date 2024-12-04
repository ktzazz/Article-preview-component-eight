const boton = document.getElementsByName('arrow-redo');
const menu = document.getElementsByClassName('socials');

boton.addEventListener('click', () => {
  menu.classList.toggle('socialsMenu');
});