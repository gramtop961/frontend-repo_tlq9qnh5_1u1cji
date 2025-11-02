import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';

const ContactFooter = () => {
  return (
    <section id="contact" className="relative z-10 w-full bg-gradient-to-b from-black to-black/90 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="mt-1 text-white/70">Open to internships, collaborations, and game development roles.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a href="mailto:tolgayilddiz@gmail.com" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20">
              <Mail className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm text-white/70">Email</p>
              <p className="font-medium">tolgayilddiz@gmail.com</p>
            </div>
          </a>

          <a href="tel:+905071003512" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20">
              <Phone className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm text-white/70">Phone</p>
              <p className="font-medium">+90 507 100 35 12</p>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20">
              <MapPin className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm text-white/70">Location</p>
              <p className="font-medium">Istanbul, Turkey</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/Togiylz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tolgayilddiz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://togiylz.github.io"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
          >
            <Globe className="h-4 w-4" /> Website
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Tolga Yıldız — Built with React & Tailwind. Inspired by epic RPG vibes.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
