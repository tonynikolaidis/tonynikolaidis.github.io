// Mobile navbar

let navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
let navbarQualifiedName = 'aria-expanded';
let navbarTogglerIcon = document.getElementsByClassName('navbar-toggler-icon')[0];

let scrollProgress = 0;

function initializeNavButtonEventListener() {
  navbarTogglerIcon.addEventListener("click", function () {
    let navbar = document.getElementById('navbar');

    if (navbarToggler.getAttribute(navbarQualifiedName) === 'true') {

      navbarTogglerIcon.style.backgroundImage = 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%2833, 33, 33, 1%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")';

      navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.72)';
      navbar.style.backdropFilter = 'saturate(180%) blur(20px)';
      navbar.style.borderBottom = '1px solid rgba(233, 233, 233, .25)';
      navbar.style.transitionDelay = '0ms';
      navbar.style.transitionDuration = '0ms';
    } else {

      if (scrollProgress === 0) {
        navbarTogglerIcon.style.backgroundImage = 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")';
      }

      navbar.style.backgroundColor = 'transparent';
      navbar.style.backdropFilter = 'none';
      navbar.style.borderBottom = '1px solid rgba(233, 233, 233, 0)';
      navbar.style.transitionDelay = '150ms';
      navbar.style.transitionDuration = '300ms';
    }
  });
}

// Typewriter effect
let typewriter = new Typed('#home-attributes-span', {
  strings: ['Web developer', 'UI/UX Designer', 'CS Student'],
  stringsElements: null,
  loop: true,
  startDelay: 100,
  typeSpeed: 150,
  backDelay: 1250,
  backSpeed: 75
});

// Particles
particlesJS("home-particles", {
  "particles": {
    "number": {"value": 100, "density": {"enable": true, "value_area": 800}},
    "color": {"value": ["#fafafa", "#ffffff", "#eeeeee"]},
    "shape": {
      "type": "circle",
      "stroke": {"width": 0, "color": "#000000"},
      "polygon": {"nb_sides": 5},
      "image": {"src": "img/github.svg", "width": 100, "height": 100}
    },
    "opacity": {
      "value": 0.15,
      "random": true,
      "anim": {"enable": false, "speed": 0.1, "opacity_min": 0.1, "sync": true}
    },
    "size": {"value": 2, "random": true, "anim": {"enable": false, "speed": 10, "size_min": 0.1, "sync": false}},
    "line_linked": {"enable": true, "distance": 150, "color": "#eeeeee", "opacity": 0.15, "width": 0.5},
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {"enable": false, "mode": "bubble"},
      "onclick": {"enable": false, "mode": "push"},
      "resize": true
    },
    "modes": {
      "grab": {"distance": 400, "line_linked": {"opacity": 1}},
      "bubble": {"distance": 300, "size": 15, "duration": 2, "opacity": 0.2, "speed": 3},
      "repulse": {"distance": 200, "duration": 0.4},
      "push": {"particles_nb": 4},
      "remove": {"particles_nb": 2}
    }
  },
  "retina_detect": true
});

// ------------------------
// ---- Scroll Trigger ----
// ------------------------

// Media queries

let parallaxEnd = '';

ScrollTrigger.matchMedia({
  '(min-width: 1px)': function () {
    parallaxEnd = '+=3150'

  },
  '(max-width: 575px)': function () {
    ScrollTrigger.create({
      trigger: "#home",
      start: 'bottom top+=30px',
      end: 'bottom top+=30px',
      // animation: darkenBurgerMenuIcon,
      // scrub: true,
      // markers: true
      onUpdate: function (self) {
        scrollProgress = self.progress;
        if (self.progress === 1 && navbarToggler.getAttribute(navbarQualifiedName) === 'false') {
          navbarTogglerIcon.style.backgroundImage = 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%2833, 33, 33, 1%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")';
        } else if (navbarToggler.getAttribute(navbarQualifiedName) === 'false') {
          navbarTogglerIcon.style.backgroundImage = 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%28255, 255, 255, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")';
        }
      }
    });

  },
  '(min-width: 576px)': function () {
    parallaxEnd = '+=2100';

    // Navbar blur
    let blurNavbar = gsap.to("#navbar", {
      'backdrop-filter': 'saturate(180%) blur(20px)',
      'background-color': 'rgba(250, 250, 250, 0.72)',
      'border-bottom': '1px solid rgba(233, 233, 233, .25)',
      paused: false
    });

    let darkenNavLinks = gsap.to('.nav-link', {
      'color': '#212121',
      // 'filter': 'drop-shadow(1px 1px 0px rgba(0, 0, 0, 1))',
      paused: false
    });

    ScrollTrigger.create({
      trigger: "#about",
      start: 'top+=25px bottom',
      endTrigger: '#home-circles',
      end: 'bottom-=50px top',
      animation: blurNavbar,
      scrub: true,
      // markers: true,
      // onUpdate: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
    });

    ScrollTrigger.create({
      trigger: "#about",
      start: 'top+=25px bottom',
      endTrigger: '#home-circles',
      end: 'bottom-=50px top',
      animation: darkenNavLinks,
      scrub: true,
    });

  },
  '(min-width: 768px)': function () {
    parallaxEnd = '+=2050';

  },
  '(min-width: 992px)': function () {
    parallaxEnd = '+=2100';

  },
  '(min-width: 1200px)': function () {
    parallaxEnd = '+=2050';

  },
  '(min-width: 1440px)': function () {
    parallaxEnd = '+=2000';

  }
});

// Parallax
gsap.timeline({
  scrollTrigger: {
    trigger: '#wrapper',
    scrub: true,
    start: 'top top',
    // end: 'top top',
    end: parallaxEnd,
    pin: false,
  }
})
  // .to('#about', {
  //   y: -1540,
  //   ease: 'none'
  // }, 0)
  .to('#home', {
    y: 860,
    ease: 'none'
  }, 0)
  .to('#home-particles', {
    y: 1000,
    ease: 'none'
  }, 0)
  .to('#home-circles', {
    y: 500,
    ease: 'none'
  }, 0)
  .to('#home-box', {
    y: 500,
    ease: 'none'
  }, 0)
  .to('#home-photo', {
    y: 250,
    ease: 'none'
  }, 0)

// Scrollspy
let homeNavLink = document.getElementById('nav-home');
let aboutNavLink = document.getElementById('nav-about');
let portfolioNavLink = document.getElementById('nav-portfolio');
let contactNavLink = document.getElementById('nav-contact');

let activeProgress = 1;

ScrollTrigger.create({
  trigger: '#home',
  start: 'top bottom',
  end: 'bottom top+=100px',
  onUpdate: function ({progress, direction, isActive}) {
    if (progress < activeProgress) {
      homeNavLink.classList.add('active');
      aboutNavLink.classList.remove('active');
    } else {
      homeNavLink.classList.remove('active');
      aboutNavLink.classList.add('active');
    }
  },
  // markers: true
});

ScrollTrigger.create({
  trigger: '#about',
  start: 'top top',
  end: 'bottom top+=100px',
  onUpdate: function ({progress, direction, isActive}) {
    if (progress < activeProgress) {
      aboutNavLink.classList.add('active');
      portfolioNavLink.classList.remove('active');
    } else {
      aboutNavLink.classList.remove('active');
      portfolioNavLink.classList.add('active');
    }
  },
  // markers: true
});

ScrollTrigger.create({
  trigger: '#portfolio',
  start: 'bottom top+=100px',
  end: 'bottom bottom',
  onUpdate: function ({progress, direction, isActive}) {
    if (progress < activeProgress) {
      portfolioNavLink.classList.add('active');
      contactNavLink.classList.remove('active');
    } else {
      portfolioNavLink.classList.remove('active');
      contactNavLink.classList.add('active');
    }
  },
  // markers: true
});

let duration = 0.075;

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
if (isSafari) {
  duration = 0.75;
}

// Scroll to
function scrollToHome() {
  // gsap.to(window, {duration: duration, scrollTo: "#home"});
  gsap.to(window, {duration: duration, scrollTo: 0});
}

function scrollToAbout() {
  gsap.to(window, {duration: duration, scrollTo: "#about"});
}

function scrollToPortfolio() {
  gsap.to(window, {duration: duration, scrollTo: "#portfolio"});
}

function scrollToContact() {
  gsap.to(window, {duration: duration, scrollTo: "#contact"});
}
