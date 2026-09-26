import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Clean Glowing Particles
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const particleCount = isMobile ? 55 : 75;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const colorTeal = new THREE.Color("#64ffda");
    const colorCyan = new THREE.Color("#00eaff");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 900;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 900;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;

      const mixColor = Math.random() > 0.5 ? colorTeal : colorCyan;
      colors[i * 3] = mixColor.r;
      colors[i * 3 + 1] = mixColor.g;
      colors[i * 3 + 2] = mixColor.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.2,
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 5.5 : 4.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particleSystem);

    // 3. Subtle Connecting Lines (Minimal & Clean)
    const linesGeometry = new THREE.BufferGeometry();
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x64ffda,
      transparent: true,
      opacity: isMobile ? 0.35 : 0.25,
      blending: THREE.AdditiveBlending,
    });
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // 4. Smooth Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.08;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.08;
    };
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouseX = (event.touches[0].clientX - window.innerWidth / 2) * 0.12;
        mouseY = (event.touches[0].clientY - window.innerHeight / 2) * 0.12;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 5. Animation Loop
    let animationFrameId: number;
    const lineMaxDistance = isMobile ? 85 : 85;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Update particle positions
      const pos = particleSystem.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        if (Math.abs(pos[i * 3]) > 450) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 450) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 200) velocities[i].z *= -1;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Draw subtle connecting lines between close particle pairs only
      const linePositions: number[] = [];

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < lineMaxDistance) {
            linePositions.push(
              pos[i * 3],
              pos[i * 3 + 1],
              pos[i * 3 + 2],
              pos[j * 3],
              pos[j * 3 + 1],
              pos[j * 3 + 2]
            );
          }
        }
      }

      linesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      // Parallax camera shift
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70 overflow-hidden"
    />
  );
}
