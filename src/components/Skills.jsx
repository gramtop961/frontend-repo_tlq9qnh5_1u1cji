import React from 'react';
import { Code, Cpu, Layers, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
    {children}
  </span>
);

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-8 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20">
        <Icon className="h-5 w-5 text-emerald-300" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
        {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-16 text-white">
      <SectionHeader
        icon={Rocket}
        title="Technical Skills"
        subtitle="Tools and technologies I use to build engaging games"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-300">
              <Code className="h-5 w-5" />
              <h3 className="font-semibold">Programming</h3>
            </div>
            <Star className="h-4 w-4 text-yellow-300" />
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Pill>C#</Pill>
            <Pill>C++</Pill>
            <Pill>C</Pill>
            <Pill>Java</Pill>
            <Pill>Python</Pill>
            <Pill>SQL (Analytics)</Pill>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-300">
              <Cpu className="h-5 w-5" />
              <h3 className="font-semibold">Engines & Frameworks</h3>
            </div>
            <Star className="h-4 w-4 text-yellow-300" />
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Pill>Unity (C#)</Pill>
            <Pill>Unreal 4/5 (Blueprints & C++)</Pill>
            <Pill>Godot</Pill>
            <Pill>VR/AR</Pill>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-300">
              <Layers className="h-5 w-5" />
              <h3 className="font-semibold">Tools</h3>
            </div>
            <Star className="h-4 w-4 text-yellow-300" />
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Pill>Firebase</Pill>
            <Pill>AdMob</Pill>
            <Pill>PlayFab</Pill>
            <Pill>Cinemachine</Pill>
            <Pill>DOTween</Pill>
            <Pill>Plastic SCM</Pill>
            <Pill>Git</Pill>
            <Pill>Figma</Pill>
            <Pill>Photoshop</Pill>
            <Pill>Blender</Pill>
            <Pill>Spine</Pill>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-300">
              <Rocket className="h-5 w-5" />
              <h3 className="font-semibold">Core Knowledge</h3>
            </div>
            <Star className="h-4 w-4 text-yellow-300" />
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Pill>OOP</Pill>
            <Pill>Data Structures</Pill>
            <Pill>Mobile Optimization</Pill>
            <Pill>Real-time Multiplayer</Pill>
            <Pill>Physics-based Gameplay</Pill>
            <Pill>Particle Systems</Pill>
            <Pill>Level Design</Pill>
            <Pill>Procedural Generation</Pill>
            <Pill>Game Loop Optimization</Pill>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
