import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Cpu, Database, Globe, Server, Shield, Mail } from 'lucide-react'
import * as React from 'react'
import { motion, Variants } from 'framer-motion'
import { PROJECTS } from '~/data/projects'
import { SkillsEcosystem } from '~/components/SkillsEcosystem'

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
        <div className="flex flex-col gap-6 max-w-3xl">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Available for new opportunities</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">secure systems</span> & intelligent interfaces.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
            Senior Frontend Engineer & UI/UX Designer specializing in React, TanStack Start, and high-performance server architectures. I build scalable, production-grade applications that solve complex problems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/Nevy11" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700 hover:border-slate-600">
              <Globe className="w-4 h-4" />
              GitHub
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

      {/* Selected Projects */}
      <motion.section 
        id="projects" 
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">Featured Engineering</h2>
          <p className="text-slate-400">A selection of production systems and architectural explorations.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
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
        </div>
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
          <a href="mailto:smongare2004@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all">
            <Mail className="w-4 h-4" /> Contact Me
          </a>
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
