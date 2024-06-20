document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText)
  ScrollTrigger.refresh()

  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load, resize',
  })

  var marker = { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20, zIndex: 2000 }

  //white text on black background
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
        color: '#444',
        ease: 'back',
        duration: 2,
        stagger: 0.05,
      })
    })
  }

  //black text on grey white background
  function animateDesktopOther() {
    var animatedText = document.querySelectorAll('.animate-text-other')
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
        color: '#c4c4c4',
        ease: 'back',
        duration: 2,
        stagger: 0.05,
      })
    })
  }

  //black text on yellow background
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
        color: '#a4ad00',
        ease: 'back',
        duration: 3,
        stagger: 0.1,
      })
    })
  }

  //three word h1 heading
  function animateDesktopDarkH1() {
    var animatedTextDark = document.querySelectorAll('.animate-text-dark-h1')

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
        duration: 3,
        stagger: 0.5,
      })
    })
  }

  function halfCircle() {
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '.half-circle',
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'restart none none reverse',
        //markers: marker,
      },
    })

    tl.addLabel('start')
    tl.from('.half-circle .svg-detail .one', { yPercent: 200 })
    tl.from('.half-circle .svg-detail .two', { yPercent: 100 }, '<25%')
  }

  function circle() {
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '.circle',
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'restart none none reverse',
        //markers: marker,
      },
    })

    tl.addLabel('start')
    tl.from('.circle .svg-detail .one', { xPercent: 50, yPercent: 50, scale: 2 })
  }

  function hero() {
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart none none reverse',
        //markers: marker,
      },
    })

    tl.addLabel('start')
    tl.from('svg', { rotate: 360 }, 'start')
    tl.from('.crescent', { duration: 1.2, xPercent: 50, yPercent: -50 }, 'start')
    tl.from('.dots', { duration: 1.2, xPercent: -50, yPercent: 50 }, 'start')
  }

  // Marquee effect
  function marquee() {
    const marquee = document.querySelectorAll('.marquee')
    marquee.forEach((e) => {
      // Create swiper carousel
      const carousel = e.querySelectorAll('.marquee-carousel')

      carousel.forEach((e) => {
        const items = e.querySelector('.marquee-items')
        const item = e.querySelectorAll('.marquee-item')

        e.classList.add('swiper-container')
        items.classList.add('swiper-wrapper')
        item.forEach((e) => e.classList.add('swiper-slide'))

        const slider = new Swiper(e, {
          slidesPerView: 'auto',
          loop: true,
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumVelocityRatio: 0.3,
        })
      })

      // Scroll triggered movement
      const tl = new gsap.timeline()

      tl.set(carousel, { willChange: 'transform' })
      tl.fromTo(carousel[0], { x: -300 }, { x: 0, ease: 'none' }, 0)
      tl.fromTo(carousel[1], { x: 300 }, { x: 0, ease: 'none' }, 0)
      tl.set(carousel, { willChange: 'auto' })

      ScrollTrigger.create({
        trigger: e,
        animation: tl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.3,
        refreshPriority: -14,
      })
    })
  }

  // Check if the screen width is at least 768px
  if (window.matchMedia('(min-width: 768px)').matches) {
    animateDesktop()
    animateDesktopOther()
    animateDesktopDark()
    halfCircle()
    circle()
    animateDesktopDarkH1()
    hero()
    marquee()
  }
})
