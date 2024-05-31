let navLinks = document.querySelector('.desktop-nav')
let menuOpenBtn = document.querySelector('.hamburger')

////On toggleMenu, change navLinks top position, to show or hide nav links dropdown
function toggleMenu() {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active')
    menuOpenBtn.classList.remove('active')
  } else {
    navLinks.classList.add('active')
    menuOpenBtn.classList.add('active')
  }
}
menuOpenBtn.addEventListener('click', toggleMenu)

//////Close the menu, if the user touches outside of it
function closeMenu(event) {
  if (!navLinks.contains(event.target) && !menuOpenBtn.contains(event.target)) {
    navLinks.classList.remove('active')
    menuOpenBtn.classList.remove('active')
  }
}
document.addEventListener('touchstart', closeMenu)
document.addEventListener('click', closeMenu)

//////Add event listener to close menu when an anchor inside the nav is clicked
let navAnchors = navLinks.querySelectorAll('a')

navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    // Remove active class from navLinks/close nav
    navLinks.classList.remove('active')
    menuOpenBtn.classList.remove('active')
  })
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()

    let targetId = this.getAttribute('href').substring(1)
    let targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Smooth scroll with offset
      let offset = 60 // You can adjust this offset as needed
      let targetOffsetTop = targetElement.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: targetOffsetTop - offset,
        behavior: 'smooth',
      })
    }
  })
})

//if hamburger toggle is open and user changes screen width, greater than 768px, hamburger open toggle/ active state removed.
//Desktop nav ccs is active.
function toggleMobileNav() {
  if (window.innerWidth > 768) {
    console.log('desktop')
    navLinks.classList.remove('active')
    menuOpenBtn.classList.remove('active')
  } else {
    console.log('mobile')
  }
}
// Initial check
toggleMobileNav()
// Listen for window resize and orientation change events
window.addEventListener('resize', toggleMobileNav)
window.addEventListener('orientationchange', toggleMobileNav)
