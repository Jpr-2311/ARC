import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page load animations
gsap.from('.navbar', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

gsap.from('.hero', {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 0.3
});

// Scroll animations for sections
gsap.from('.section', {
  scrollTrigger: {
    trigger: '.section',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  stagger: 0.2
});

// Scroll animations for cards
gsap.from('.card', {
  scrollTrigger: {
    trigger: '.card',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.1
});