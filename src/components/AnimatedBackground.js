import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });

    camera.position.z = 50;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    sceneRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const positionArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positionArray[i] = (Math.random() - 0.5) * 200;
      positionArray[i + 1] = (Math.random() - 0.5) * 200;
      positionArray[i + 2] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: '#6366f1',
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Store particle positions for animation
    const particlePositions = particles.geometry.attributes.position.array;
    const particleVelocities = [];
    for (let i = 0; i < particleCount; i++) {
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3,
        z: (Math.random() - 0.5) * 0.2,
      });
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Add velocity
        particlePositions[idx] += particleVelocities[i].x;
        particlePositions[idx + 1] += particleVelocities[i].y;
        particlePositions[idx + 2] += particleVelocities[i].z;

        // Wrap around if out of bounds
        if (particlePositions[idx] > 100) particlePositions[idx] = -100;
        if (particlePositions[idx] < -100) particlePositions[idx] = 100;
        if (particlePositions[idx + 1] > 100) particlePositions[idx + 1] = -100;
        if (particlePositions[idx + 1] < -100) particlePositions[idx + 1] = 100;

        // Mouse attraction
        const dx = mouseX * 30 - particlePositions[idx];
        const dy = mouseY * 30 - particlePositions[idx + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          particlePositions[idx] += dx * 0.01;
          particlePositions[idx + 1] += dy * 0.01;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Rotate particles
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="animated-bg" />;
};

export default AnimatedBackground;
