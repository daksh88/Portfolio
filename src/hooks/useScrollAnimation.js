import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll('[data-animate]');
    
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: delay + index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return ref;
};
