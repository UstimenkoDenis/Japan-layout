(function () {
   const header = document.querySelector('.header')        

  window.onscroll = () => {
      if(window.pageYOffset > 50) {
        header.classList.add('header-active')
      } else {
        header.classList.remove('header-active')}
      } 
})()

// Burger Handler

(function () {
  const menu = document.querySelector('.header__nav'),
        burgerItem  = document.querySelector('.burger'),
        menuCloseItem = document.querySelector('.header__nav-close')

  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active')
  })

  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active')
  })

}())