import React from 'react';
import { motion } from 'framer-motion';

interface FloatingFlag {
  id: string;
  iso: string;
  name: string;
  size: number;
  startX: number; // percentage
  startY: number; // percentage
  duration: number;
  delay: number;
  opacity: number;
  rotateRange: [number, number];
  driftX: number;
  driftY: number;
}

const AMBIENT_FLAGS: FloatingFlag[] = [
  { id: 'eu', iso: 'eu', name: 'Schengen EU', size: 90, startX: 8, startY: 15, duration: 24, delay: 0, opacity: 0.16, rotateRange: [-6, 6], driftX: 35, driftY: -40 },
  { id: 'ch', iso: 'ch', name: 'Switzerland', size: 80, startX: 82, startY: 12, duration: 28, delay: 1, opacity: 0.15, rotateRange: [8, -8], driftX: -40, driftY: 45 },
  { id: 'ae', iso: 'ae', name: 'UAE', size: 85, startX: 18, startY: 48, duration: 26, delay: 2, opacity: 0.18, rotateRange: [-10, 10], driftX: 30, driftY: 35 },
  { id: 'gb', iso: 'gb', name: 'United Kingdom', size: 95, startX: 74, startY: 42, duration: 32, delay: 3, opacity: 0.14, rotateRange: [5, -12], driftX: -35, driftY: -35 },
  { id: 'us', iso: 'us', name: 'United States', size: 100, startX: 32, startY: 78, duration: 30, delay: 1.5, opacity: 0.14, rotateRange: [-8, 8], driftX: 45, driftY: -30 },
  { id: 'ca', iso: 'ca', name: 'Canada', size: 85, startX: 62, startY: 82, duration: 25, delay: 4, opacity: 0.16, rotateRange: [10, -6], driftX: -30, driftY: 30 },
  { id: 'jp', iso: 'jp', name: 'Japan', size: 80, startX: 88, startY: 65, duration: 29, delay: 2.5, opacity: 0.17, rotateRange: [-7, 9], driftX: -45, driftY: -25 },
  { id: 'sg', iso: 'sg', name: 'Singapore', size: 75, startX: 12, startY: 88, duration: 27, delay: 3.5, opacity: 0.15, rotateRange: [6, -8], driftX: 40, driftY: -40 },
  { id: 'fr', iso: 'fr', name: 'France', size: 85, startX: 48, startY: 22, duration: 31, delay: 0.5, opacity: 0.13, rotateRange: [-5, 7], driftX: -25, driftY: 35 },
  { id: 'au', iso: 'au', name: 'Australia', size: 90, startX: 52, startY: 60, duration: 34, delay: 4.5, opacity: 0.14, rotateRange: [7, -9], driftX: 30, driftY: -45 },
  { id: 'th', iso: 'th', name: 'Thailand', size: 75, startX: 25, startY: 30, duration: 23, delay: 1.8, opacity: 0.16, rotateRange: [-9, 9], driftX: -30, driftY: 25 },
  { id: 'in', iso: 'in', name: 'India', size: 105, startX: 45, startY: 92, duration: 33, delay: 2, opacity: 0.19, rotateRange: [5, -5], driftX: 20, driftY: -50 },
];

export const AmbientFlagsBg: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep ambient gradient overlays */}
      <div className="absolute inset-0 bg-radial-hero-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 via-transparent to-obsidian-950/90" />

      {/* Floating Translucent Flags Layer */}
      {AMBIENT_FLAGS.map((flag) => (
        <motion.div
          key={flag.id}
          className="absolute will-change-transform rounded-md overflow-hidden shadow-2xl backdrop-blur-[2px] border border-white/10"
          style={{
            left: `${flag.startX}%`,
            top: `${flag.startY}%`,
            width: `${flag.size}px`,
            opacity: flag.opacity,
          }}
          initial={{
            x: 0,
            y: 0,
            rotate: flag.rotateRange[0],
          }}
          animate={{
            x: [0, flag.driftX, 0, -flag.driftX, 0],
            y: [0, flag.driftY, 0, -flag.driftY, 0],
            rotate: [flag.rotateRange[0], flag.rotateRange[1], flag.rotateRange[0]],
          }}
          transition={{
            duration: flag.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: flag.delay,
          }}
        >
          <img
            src={`https://flagcdn.com/w320/${flag.iso}.png`}
            alt={flag.name}
            className="w-full h-auto object-cover filter brightness-90 contrast-125"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      ))}
    </div>
  );
};
