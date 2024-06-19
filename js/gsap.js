document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
  var marker = { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20, zIndex: 2000 }

  function animateDesktop() {
    var animatedText = document.querySelectorAll('.animate-text')

    animatedText.forEach(function (text) {
      var mySplitText = new SplitText(text, { type: 'words,chars' }),
        chars = mySplitText.words

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'restart none none none',
          //markers: marker,
        },
      })

      gsap.set(text, { perspective: 400 })

      tl.from(chars, {
        color: '#888',
        ease: 'back',
        duration: 2,
        stagger: 0.05,
      })
    })
  }

  function animateDesktopDark() {
    var animatedTextDark = document.querySelectorAll('.animate-text-dark')

    animatedTextDark.forEach(function (text) {
      var mySplitText = new SplitText(text, { type: 'words,chars' }),
        chars = mySplitText.words

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'restart none none none',
          //markers: marker,
        },
      })

      gsap.set(text, { perspective: 400 })

      tl.from(chars, {
        delay: 0.5,
        color: '#a4ad00',
        ease: 'back',
        duration: 2,
        stagger: 0.1,
      })
    })
  }

  function circle() {
    let tl = gsap.timeline({
      defaults: { duration: 1, ease: 'none' },
      scrollTrigger: {
        trigger: '.circle',
        start: 'top top',
        end: 'bottom top',
        toggleActions: 'restart none none reverse',
        //markers: marker,
      },
    })

    tl.addLabel('start')
    tl.from('.circle .svg-detail .one', { duration: 1, yPercent: 200 })
    tl.from('.circle .svg-detail .two', { duration: 1, yPercent: 100 }, '<25%')
  }

  // Check if the screen width is at least 768px
  if (window.matchMedia('(min-width: 768px)').matches) {
    animateDesktop()
    animateDesktopDark()
    circle()
  }
})
