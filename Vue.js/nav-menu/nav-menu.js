function navMenu() {
  const navMenu = document.querySelector('#nav-menu')
  const navIcon = document.querySelector('#nav-icon')
  function hideOrShow() {
    if (navMenu.style.display === 'block') {
      navMenu.style.display = 'none'
    } else {
      navMenu.style.display = 'block'
    }
  }
  navIcon.addEventListener('click', hideOrShow)
  // console.log(' OO  K K\nO  O KK\n 00  K K')

}
navMenu()