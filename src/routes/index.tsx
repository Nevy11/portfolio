import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Cpu, Database, Globe, Server, Shield, Mail, FileText, Briefcase, Calendar } from 'lucide-react'
import * as React from 'react'
import { motion, Variants } from 'framer-motion'
import { PROJECTS } from '~/data/projects'
import { SkillsEcosystem } from '~/components/SkillsEcosystem'

import { AnimatePresence } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: Home,
})

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
}

function Home() {
  const [filter, setFilter] = React.useState('All')
  
  const filteredProjects = React.useMemo(() => {
    if (filter === 'All') return PROJECTS
    if (filter === 'Production') return PROJECTS.filter(p => p.type.includes('Production'))
    if (filter === 'Deep-Dive') return PROJECTS.filter(p => p.type.includes('Deep-Dive'))
    return PROJECTS
  }, [filter])

  return (
    <div className="flex flex-col gap-24 pb-12 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-12 lg:pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent -z-10 rounded-3xl" />
        <div className="flex flex-col gap-6 max-w-4xl mx-auto items-center text-center pt-8">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 w-fit mx-auto">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Available for new opportunities</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white text-center">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">secure systems</span> & intelligent interfaces.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl text-center mx-auto">
            Senior Frontend Engineer & UI/UX Designer specializing in React, TanStack Start, and high-performance server architectures. I build scalable, production-grade applications that solve complex problems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/resume" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700 hover:border-slate-600">
              <FileText className="w-4 h-4" />
              View Resume
            </Link>
            <a href="https://github.com/Nevy11" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 hover:border-slate-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Metrics / Philosophy */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
          <div className="p-3 bg-blue-500/10 text-blue-400 w-fit rounded-lg"><Server className="w-6 h-6" /></div>
          <h3 className="text-xl font-bold text-white">High Performance</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Expertise in ultra-low memory footprint backends using Rust and scalable serverless edge computing via Cloudflare Workers.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-lg"><Shield className="w-6 h-6" /></div>
          <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Building secure financial pipelines, wallet management, and robust authentication layers utilizing Supabase & robust cryptography.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
          <div className="p-3 bg-violet-500/10 text-violet-400 w-fit rounded-lg"><Cpu className="w-6 h-6" /></div>
          <h3 className="text-xl font-bold text-white">AI/ML Integration</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Integrating predictive analytics, Gemini/OpenAI models, and custom TensorFlow deployments into reactive user interfaces.</p>
        </motion.div>
      </motion.section>
      {/* Tech Stack Orbit */}
      <motion.section
        className="w-full flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">Full-Stack Ecosystem</h2>
          <p className="text-slate-400">Mastery across the stack, from interactive UI to low-level systems.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30">
          <SkillsEcosystem />
        </motion.div>
      </motion.section>

      {/* Professional Experience Timeline */}
      <motion.section 
        className="flex flex-col gap-8 w-full mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-2 mb-8">
          <div className="flex items-center justify-center gap-3 text-emerald-400">
            <Briefcase className="w-6 h-6" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
          </div>
          <p className="text-slate-400">A track record of building robust systems and leading technical teams.</p>
        </motion.div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto w-full">
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <span className="inline-flex items-center justify-center gap-1.5 text-sm text-slate-400 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 w-fit mb-4">
              <Calendar className="w-3 h-3" /> 2023 — Present
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Lead Full-Stack Developer</h3>
            <h4 className="text-lg text-emerald-500 font-medium mt-1 mb-4">Vault OS</h4>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Leading the architectural design and implementation of a highly resilient financial command center handling multi-currency wallets, complex KYC onboarding, and sub-50ms integrations with Stripe and M-Pesa. Spearheaded edge-compute deployments ensuring 100% ACID compliance.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <span className="inline-flex items-center justify-center gap-1.5 text-sm text-slate-400 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 w-fit mb-4">
              <Calendar className="w-3 h-3" /> 2022 — 2023
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Core Technical Advisor & Developer</h3>
            <h4 className="text-lg text-slate-300 font-medium mt-1 mb-4">Smart Blossoming Foundation</h4>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Engineered a highly performant, bilingual wellness portal capable of operating flawlessly on low-bandwidth connections. Designed and implemented complex psychological quantitative growth-tracking metrics secured locally via edge-compute infrastructure.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <span className="inline-flex items-center justify-center gap-1.5 text-sm text-slate-400 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 w-fit mb-4">
              <Calendar className="w-3 h-3" /> 2019 — 2022
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Founder & Operator</h3>
            <h4 className="text-lg text-slate-300 font-medium mt-1 mb-4">Cyber Cafe & PS4 Hub</h4>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Successfully launched and managed a local gaming and internet hub, honing skills in hardware management, local networking, customer relations, and business operations. Gained deep exposure to Linux environments and foundational networking concepts.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Selected Projects */}
      <motion.section 
        id="projects" 
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Engineering</h2>
            <p className="text-slate-400">A selection of production systems and architectural explorations.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-xl border border-slate-800 w-fit">
            {['All', 'Production', 'Deep-Dive'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === f 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>
        
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group flex flex-col p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors gap-6 relative overflow-hidden"
              >
              <div className="flex flex-col gap-3 z-10">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${project.typeColor}`}>
                    {project.type}
                  </span>
                  <span className="text-sm font-medium text-slate-500">{project.role}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto z-10">
                {project.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50 mt-2 z-10">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-emerald-400 flex items-center gap-1 transition-colors">
                    <Globe className="w-4 h-4" /> Live App
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                    <Code2 className="w-4 h-4" /> Source
                  </a>
                )}
                <Link to="/projects/$slug" params={{ slug: project.id }} className="ml-auto text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors">
                  Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Get in Touch */}
      <motion.section 
        className="mt-8 flex flex-col items-center justify-center text-center gap-6 p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-slate-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="p-3 bg-emerald-500/10 rounded-full">
          <Mail className="w-6 h-6 text-emerald-400" />
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let's build something great.</motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-2xl">
          I'm currently exploring new opportunities to architect complex systems and build beautiful interfaces. Feel free to reach out.
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <Mail className="w-5 h-5" />
            Initialize Comm Link
          </Link>
        </motion.div>
      </motion.section>

      {/* The Un-Git-Tracked Epoch */}
      <motion.section 
        className="mt-4 p-8 md:p-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col gap-6 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Database className="w-64 h-64 text-slate-100" />
        </div>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white tracking-tight z-10">The Un-Git-Tracked Epoch</motion.h2>
        <motion.div variants={itemVariants} className="w-12 h-1 bg-emerald-500 rounded z-10" />
        <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed max-w-3xl z-10">
          A philosophical nod to missing repositories. Before rigid version control workflows, there was a deep history of low-level systems experimentation, memory management, and foundational coding. These missing commits represent a long-standing engineering instinct that laid the groundwork for today's scalable, high-performance architectures.
        </motion.p>
      </motion.section>
    </div>
  )
}
