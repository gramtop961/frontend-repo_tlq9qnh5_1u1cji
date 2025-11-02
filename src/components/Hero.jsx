import React from 'react';
import Spline from '@splinetool/react-spline';
import { Gamepad2, Github, Linkedin, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center gap-6 px-6 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur"
        >
          <Gamepad2 className="h-4 w-4 text-emerald-300" />
          <span>Portfolio • Game Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          Tolga Yıldız
          <span className="block text-emerald-300">Game Developer (Unity / C#)</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-base text-white/90 sm:text-lg"
        >
          Software Engineering student and Unity-focused developer. Experienced with Google Play
          publishing, Firebase leaderboards, AdMob monetization, and building polished gameplay
          systems. Passionate about crafting immersive, performant interactive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center gap-3 text-sm text-white/90"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
            <MapPin className="h-4 w-4 text-emerald-300" /> Istanbul, Turkey
          </span>
          <a href="tel:+905071003512" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur hover:bg-white/20">
            <Phone className="h-4 w-4 text-emerald-300" /> +90 507 100 35 12
          </a>
          <a href="mailto:tolgayilddiz@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur hover:bg-white/20">
            <Mail className="h-4 w-4 text-emerald-300" /> tolgayilddiz@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-2 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-md bg-emerald-400 px-5 py-2 font-semibold text-black shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Contact
          </a>
          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://github.com/Togiylz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 hover:bg-white/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/tolgayilddiz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 hover:bg-white/20"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://togiylz.github.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 hover:bg-white/20"
            >
              <Globe className="h-4 w-4" /> Website
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
