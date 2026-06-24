import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Code2, Globe, Cpu, Server, Shield, Layers } from 'lucide-react'
import { PROJECTS } from '~/data/projects'
import * as React from 'react'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectCaseStudy,
})

function ProjectCaseStudy() {
  const { slug } = Route.useParams()
  const project = PROJECTS.find((p) => p.id === slug)

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-4xl font-bold text-slate-200">Project Not Found</h1>
        <Link to="/" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-12 pb-20 fade-in">
      {/* Header */}
      <div className="flex flex-col gap-6 pt-10">
        <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-2 w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${project.typeColor}`}>
              {project.type}
            </span>
            <span className="text-sm font-medium text-slate-400 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
              {project.role}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mt-2">
            {project.description}
          </p>
        </div>

        {project.image && (
          <div className="w-full mt-6 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-10"></div>
            <img 
              src={project.image} 
              alt={`${project.title} Mockup`} 
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map(tech => (
            <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-slate-900 text-slate-300 rounded-lg border border-slate-800">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-800/60 mt-4">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all">
              <Globe className="w-4 h-4" /> View Live
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700 hover:border-slate-600">
              <Code2 className="w-4 h-4" /> Source Code
            </a>
          )}
          {project.links.mobile && (
            <a href={project.links.mobile} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700 hover:border-slate-600">
              <Layers className="w-4 h-4" /> Mobile Client
            </a>
          )}
        </div>
      </div>

      {/* Case Study Content */}
      <div className="grid grid-cols-1 gap-12 mt-8">
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-emerald-400">
            <Server className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">System Challenge</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50">
            {project.challenge}
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-violet-400">
            <Cpu className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">Architecture & Solution</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 whitespace-pre-line">
            {project.solution}
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-blue-400">
            <Shield className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">Performance Outcomes</h2>
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-800/50 bg-slate-900/20">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                <span className="text-slate-300 text-lg leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
