import * as React from 'react'
import { motion } from 'framer-motion'
import { Atom, Settings, Terminal, Cloud, Cpu, Database, Blocks, Layout, Server, Flame } from 'lucide-react'

const SKILLS = [
  { name: 'React 19', icon: Atom, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { name: 'Rust', icon: Settings, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { name: 'Python', icon: Terminal, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { name: 'TensorFlow', icon: Cpu, color: 'text-orange-500', bg: 'bg-orange-600/10', border: 'border-orange-600/20' },
  { name: 'Cloudflare', icon: Cloud, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  { name: 'Supabase', icon: Database, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { name: 'TanStack', icon: Blocks, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  { name: 'Tailwind CSS', icon: Layout, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
  { name: 'Node.js', icon: Server, color: 'text-green-500', bg: 'bg-green-600/10', border: 'border-green-600/20' },
  { name: 'Next.js', icon: Flame, color: 'text-slate-200', bg: 'bg-slate-500/10', border: 'border-slate-500/20' },
]

export function SkillsEcosystem() {
  return (
    <div className="relative w-full py-20 overflow-hidden flex items-center justify-center min-h-[500px]">
      {/* Central Hub */}
      <motion.div 
        className="absolute z-20 flex flex-col items-center justify-center p-8 rounded-full bg-slate-900 border border-slate-700 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
          <Terminal className="w-10 h-10 text-white" />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-white text-lg">Tech Core</h3>
          <p className="text-xs text-slate-400">Full-Stack Mastery</p>
        </div>
      </motion.div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full border border-slate-800/50 absolute" />
        <div className="w-[450px] h-[450px] rounded-full border border-slate-800/40 absolute" />
        <div className="w-[600px] h-[600px] rounded-full border border-slate-800/30 absolute" />
      </div>

      {/* Orbiting Skills */}
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        {SKILLS.map((skill, index) => {
          // Distribute items across different orbital radii
          const radius = index % 2 === 0 ? 180 : 260; // Inner and outer orbits
          const angle = (index / SKILLS.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              className="absolute z-10 flex flex-col items-center gap-2 group cursor-pointer"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              whileInView={{ x, y, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: 'spring', 
                stiffness: 50, 
                damping: 15,
                delay: index * 0.1 
              }}
              whileHover={{ scale: 1.15, zIndex: 30 }}
            >
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                className={`p-4 rounded-2xl border ${skill.border} ${skill.bg} backdrop-blur-sm shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all`}
              >
                <Icon className={`w-8 h-8 ${skill.color}`} />
              </motion.div>
              
              {/* Tooltip-like label */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-8 whitespace-nowrap bg-slate-800 px-3 py-1 rounded-md text-xs font-semibold text-white border border-slate-700 shadow-xl pointer-events-none">
                {skill.name}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
