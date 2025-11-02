import React from 'react';
import { Briefcase, ExternalLink, Play, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ children }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 text-white shadow-xl shadow-black/20">
    {children}
  </div>
);

const ExperienceItem = ({ role, company, time, location, bullets, link }) => (
  <Card>
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-semibold text-emerald-300">{role}</h3>
      <span className="text-sm text-white/70">{time}</span>
    </div>
    <p className="mt-1 text-sm text-white/80">{company} • {location}</p>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/90">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-emerald-300 hover:underline"
      >
        View details <ExternalLink className="h-4 w-4" />
      </a>
    )}
  </Card>
);

const ProjectItem = ({ title, desc, link, badge, storeIcon }) => (
  <Card>
    <div className="flex items-start justify-between gap-2">
      <div>
        <div className="mb-2 inline-flex items-center gap-2">
          {badge && (
            <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-xs text-emerald-200">
              {badge}
            </span>
          )}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-white/80">{desc}</p>
      </div>
      {storeIcon}
    </div>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-emerald-300 hover:underline"
      >
        Open <ExternalLink className="h-4 w-4" />
      </a>
    )}
  </Card>
);

const ExperienceProjects = () => {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20">
          <Briefcase className="h-5 w-5 text-emerald-300" />
        </div>
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">Experience & Projects</h2>
          <p className="text-sm text-white/70">Highlights from internships, shipped titles, and demos</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <ExperienceItem
            role="Game Developer Intern (Summer 2025)"
            company="UDO"
            time="Ankara, Turkey"
            location="On-site"
            bullets={[
              'Developed and optimized core gameplay mechanics in Unity (C#) for a showcase-selected project.',
              'Collaborated within an agile team, applying Scrum practices.',
              'Presented the final project with the team at UDO headquarters.'
            ]}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
          <ExperienceItem
            role="Game Developer Intern"
            company="CraftianMakes"
            time="Jul 2025 – Sep 2025"
            location="Üsküdar, Istanbul"
            bullets={[
              'Developed Throw Master (Demo), a VR action game for Meta Quest, using Unity and C#.',
              'Focused on responsive physics interactions, precise controller tracking, and immersive environments.',
              'Enhanced user immersion with refined haptics and realistic physics-based object responses.'
            ]}
            link="https://www.meta.com/experiences/24337675112595406/"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <ProjectItem
            title="Sand Blast"
            desc="Unity mobile title featuring real-time global leaderboards (Firebase) and AdMob monetization. Developed realistic sand physics, optimized particle effects, and object pooling for smooth performance. Ran ad campaigns to improve visibility and acquisition."
            link="https://play.google.com/store/apps/details?id=togi.games"
            badge="Google Play"
            storeIcon={<Play className=\"h-5 w-5 text-green-300\" />}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
          <ProjectItem
            title="Block Collapse Puzzle Game"
            desc="Puzzle game with dynamic grid management, intelligent deadlock resolution, and optimized performance. Supports 2–10 rows, 2–12 columns, and 1–6 color variations."
            link="https://togiss.itch.io/casegame"
            badge="Web Demo"
            storeIcon={<Trophy className=\"h-5 w-5 text-yellow-300\" />}
          />
        </motion.div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
        <p className="mb-2 font-medium text-white">GameJam & UI/UX Projects</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            GoatJam 2024: Contributed to rapid prototyping and team-based game design in a 3-person team within 48 hours.
          </li>
          <li>
            Chainly (Figma Prototype): Designed and prototyped a logistics management dashboard with a user-friendly interface.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceProjects;
