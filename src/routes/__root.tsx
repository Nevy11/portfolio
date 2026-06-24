/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'
import { Terminal, Mail, FileText } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from '@tanstack/react-router'

const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const Twitter = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Stephen Mainda | Senior Frontend Engineer & UI/UX Designer',
        description: `Portfolio of Stephen Mainda - Architecting secure systems and intelligent interfaces.`,
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&h=630&auto=format&fit=crop',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#020617' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: [
      {
        src: '/customScript.js',
        type: 'text/javascript',
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-950 text-slate-200 font-sans antialiased min-h-screen flex flex-col selection:bg-emerald-500/30">
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-emerald-500/10 rounded-md border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">Stephen<span className="text-emerald-400">.dev</span></span>
            </Link>
            
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors" activeProps={{ className: 'text-white' }} activeOptions={{ exact: true }}>Home</Link>
              <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
              <Link to="/resume" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"><FileText className="w-4 h-4"/> Resume</Link>
              <a href="https://github.com/Nevy11" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1 w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-10 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex-1 flex flex-col"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="border-t border-slate-800 bg-slate-950/50 py-8 mt-auto">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Stephen Mainda. All rights reserved. Building secure & scalable systems.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a href="https://github.com/Nevy11" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors"><Github className="w-4 h-4" /></a>
              <a href="https://twitter.com/stephenMainda" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/in/stephen-mainda-a732893b0/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="mailto:smongare2004@gmail.com" className="hover:text-emerald-400 transition-colors"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
        </footer>
        
        <Scripts />
      </body>
    </html>
  )
}
