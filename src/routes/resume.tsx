import { createFileRoute } from '@tanstack/react-router'
import { Download, Mail, Globe, MapPin } from 'lucide-react'
import * as React from 'react'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Interactive Resume</h1>
          <p className="text-slate-400 mt-1">Ready for print or download as PDF.</p>
        </div>
        <button 
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        >
          <Download className="w-4 h-4" />
          Download / Print PDF
        </button>
      </div>

      {/* A4 Paper Container */}
      <div className="bg-white text-slate-900 mx-auto rounded-xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
        <div className="w-full max-w-[210mm] mx-auto min-h-[297mm] p-10 md:p-14 bg-white">
          
          {/* Header */}
          <header className="border-b-2 border-slate-200 pb-6 mb-6">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Stephen Mainda</h1>
            <h2 className="text-xl font-medium text-emerald-600 mt-1">Senior Frontend Engineer & UI/UX Designer</h2>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4"/> smongare2004@gmail.com</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4"/> <a href="https://portfolio.vault-os.workers.dev" className="hover:text-emerald-600 hover:underline">portfolio.vault-os.workers.dev</a></span>
              <span className="flex items-center gap-1.5"><Github className="w-4 h-4"/> github.com/Nevy11</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Remote</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1 mb-3">Professional Summary</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Senior Frontend Engineer and UI/UX Designer specializing in building highly secure, scalable, and performance-optimized web architectures. Proven expertise in React, TanStack Start, and Edge computing. Adept at transforming complex requirements into intelligent interfaces, optimizing system performance, and architecting real-time transactional platforms. Deeply passionate about cybersecurity, low-level systems experimentation, and crafting premium user experiences.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1 mb-3">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
              <div><strong className="text-slate-900">Languages:</strong> TypeScript, JavaScript, Rust, Python, HTML/CSS</div>
              <div><strong className="text-slate-900">Frontend:</strong> React 19, TanStack Start, Vite, Tailwind CSS, Angular</div>
              <div><strong className="text-slate-900">Backend:</strong> Node.js, Supabase, Cloudflare Workers, PostgreSQL</div>
              <div><strong className="text-slate-900">Tools/Other:</strong> TensorFlow, Framer Motion, Git, Figma</div>
            </div>
          </section>

          {/* Core Strengths */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1 mb-3">Core Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {['Communication Skills', 'Decision Making', 'Entrepreneurship', 'Creative Problem Solving', 'Branding', 'Discipline'].map(strength => (
                <span key={strength} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-md">
                  {strength}
                </span>
              ))}
            </div>
          </section>

          {/* Relevant Projects */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1 mb-3">Relevant Projects</h3>
            <div className="flex flex-col gap-5">
              
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-bold text-slate-900">Vault (Financial Command Center)</h4>
                  <span className="text-xs font-bold text-emerald-600">Lead Full-Stack Developer</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">
                  Architected a secure real-time ledger on Cloudflare Workers and TanStack Start. Handled multi-currency transactions, Stripe integrations, and M-Pesa callbacks with 100% ACID compliance and sub-50ms API response times globally.
                </p>
                <div className="text-xs text-slate-500 font-medium font-mono">React 19 • Supabase • Cloudflare Workers</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-bold text-slate-900">Codevia</h4>
                  <span className="text-xs font-bold text-emerald-600">Creator & Engineer</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">
                  Created an interactive learning workspace synchronizing YouTube video timestamps with an in-browser Monaco code editor using Angular Signals for zero-latency reactive state management.
                </p>
                <div className="text-xs text-slate-500 font-medium font-mono">Angular • Supabase Auth • Monaco Editor</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-bold text-slate-900">Mental Health Diary Backend</h4>
                  <span className="text-xs font-bold text-emerald-600">Systems Engineer</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">
                  Built an ultra-low memory footprint architecture in Rust (Actix-web) to ingest and process high-concurrency binary audio streams for transcription, reducing RAM overhead by 90% compared to Node.js.
                </p>
                <div className="text-xs text-slate-500 font-medium font-mono">Rust • Python • PostgreSQL</div>
              </div>

            </div>
          </section>

          {/* Other Experience & Interests */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1 mb-3">Other Experience & Interests</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 leading-relaxed space-y-2">
              <li>
                <strong className="text-slate-900">Founder & Operator:</strong> Successfully launched and managed a local Cyber Cafe and PS4 Gaming Hub, demonstrating entrepreneurship, operational management, and customer relations.
              </li>
              <li>
                <strong className="text-slate-900">Cybersecurity Enthusiast:</strong> Daily engagement with Kali Linux and industry-standard penetration testing tools to continuously develop defensive and offensive security skills.
              </li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1 mb-3">Education</h3>
            <div className="flex justify-between items-baseline">
              <div>
                <h4 className="text-base font-bold text-slate-900">Bachelor of Science in Computer Science</h4>
                <p className="text-sm font-medium text-emerald-600 mb-1">Laikipia University – Nyahururu, Kenya</p>
                <p className="text-sm text-slate-700 mt-2">
                  <strong className="text-slate-900">Relevant Coursework:</strong> Artificial Intelligence, Machine Learning Theory, Data Structures, Database Systems, Computer Networks, Web Development, Distributed Systems.
                </p>
              </div>
              <span className="text-sm font-bold text-slate-900 text-right shrink-0 ml-4">
                Expected: 2026
              </span>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
