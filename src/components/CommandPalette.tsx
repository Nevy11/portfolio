import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from '@tanstack/react-router'
import { Terminal, Home, Briefcase, FileText, Globe, Mail, Search } from 'lucide-react'

export function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const navigate = useNavigate()
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Toggle palette
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Auto-focus input
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setSearch('')
    }
  }, [isOpen])

  const commands = [
    { id: 'home', title: 'Go to Home', icon: Home, action: () => navigate({ to: '/' }) },
    { id: 'projects', title: 'View Projects', icon: Briefcase, action: () => { navigate({ to: '/' }); setTimeout(() => window.location.hash = 'projects', 100) } },
    { id: 'resume', title: 'View Resume', icon: FileText, action: () => navigate({ to: '/resume' }) },
    { id: 'github', title: 'Open GitHub', icon: Globe, action: () => window.open('https://github.com/Nevy11', '_blank') },
    { id: 'contact', title: 'Contact Me', icon: Mail, action: () => navigate({ to: '/contact' }) },
  ]

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(search.toLowerCase()) || 
    cmd.id.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelect = (action: () => void) => {
    action()
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800">
              <Terminal className="w-5 h-5 text-emerald-500" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent border-none outline-none text-slate-200 placeholder-slate-500 text-lg font-medium"
              />
              <div className="px-2 py-1 bg-slate-800 rounded text-xs font-mono text-slate-400">ESC</div>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center text-slate-500">
                  <Search className="w-6 h-6 mx-auto mb-2 opacity-50" />
                  No commands found for "{search}"
                </div>
              ) : (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd.action)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl hover:bg-emerald-500/10 hover:text-emerald-400 text-slate-300 transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-slate-500 group-hover:text-emerald-500 transition-colors" />
                      <span className="font-medium">{cmd.title}</span>
                    </button>
                  )
                })
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
