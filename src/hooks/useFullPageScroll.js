import { useEffect } from 'react';
import gsap from 'gsap';

export const useFullPageScroll = () => {
  useEffect(() => {
    let isScrolling = false;
    let currentSection = 0;
    const sections = document.querySelectorAll('.section');

    const scrollToSection = (index) => {
      if (isScrolling || index < 0 || index >= sections.length) return;

      isScrolling = true;
      currentSection = index;

      const target = sections[index];
      const targetPosition = target.offsetTop;

      gsap.to(window, {
        scrollTo: {
          y: targetPosition,
          autoKill: false
        },
        duration: 1.2,
        ease: 'power3.inOut',
        onComplete: () => {
          isScrolling = false;
        }
      });
    };

    let lastScrollTime = 0;
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime < 800) return;

      lastScrollTime = now;

      if (e.deltaY > 0) {
        // Scroll down
        scrollToSection(currentSection + 1);
      } else {
        // Scroll up
        scrollToSection(currentSection - 1);
      }

      e.preventDefault();
    };

    // Add scroll event listener
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};
