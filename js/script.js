let navLinks = document.querySelector('.desktop-nav')
let menuOpenBtn = document.querySelector('.hamburger')

// Open nav, toggle hamburger and add non scroll to body
function toggleMenu() {
  if (navLinks.style.top === '70px') {
    navLinks.style.top = '-100vh' // Close the menu
  } else {
    navLinks.style.top = '70px' // Open the menu
  }
}
menuOpenBtn.addEventListener('click', toggleMenu)

// Close the menu, if the user touches outside of it
function closeMenu(event) {
  if (!navLinks.contains(event.target) && !menuOpenBtn.contains(event.target)) {
    navLinks.style.top = '-100vh' // Close the menu
  }
}
document.addEventListener('touchstart', closeMenu)
document.addEventListener('click', closeMenu)

// Add event listener to close menu when an anchor inside the nav is clicked
let navAnchors = navLinks.querySelectorAll('a')

navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()

    if (navLinks.style.top === '70px') {
      // Only close if the menu is open
      navLinks.style.top = '-100vh' // Close the menu
    }

    // Smooth scroll with offset
    //substring removes hash
    let targetId = this.getAttribute('href').substring(1)
    let targetElement = document.getElementById(targetId)

    setTimeout(() => {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth',
      })
    }, 300)
  })
})

// Function to toggle the display of .mobile-nav based on window width
function toggleMobileNav() {
  if (window.innerWidth > 768) {
    console.log('desktop')
    if (navLinks.style.top === '70px') {
      navLinks.style.top = '0' // Reset the top position for desktop view
    }
  } else {
    console.log('mobile')
    if (navLinks.style.top === '0px') {
      navLinks.style.top = '70px' // Reset the top position for desktop view
    }
  }
}

// Initial check
toggleMobileNav()

// Listen for window resize and orientation change events
window.addEventListener('resize', toggleMobileNav)
window.addEventListener('orientationchange', toggleMobileNav)
