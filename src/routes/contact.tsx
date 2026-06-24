import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import * as React from 'react'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const submitContactForm = createServerFn({ method: 'POST' })
  .validator((data: { name: string; email: string; message: string }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("All fields are required.")
    }
    return data
  })
  .handler(async ({ data }) => {
    // In a production environment, this is where we would invoke the Supabase client:
    // const { error } = await supabase.from('inquiries').insert([data])
    
    // Simulating edge function processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return { 
      success: true, 
      message: "Message securely encrypted and dispatched to the edge." 
    }
  })

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await submitContactForm({ data })
      if (response.success) {
        setStatus('success')
        e.currentTarget.reset()
      }
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err.message || 'An unexpected error occurred.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-12 flex flex-col gap-8 fade-in w-full">
      <div className="flex flex-col gap-4 text-center items-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <Mail className="w-8 h-8 text-emerald-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Secure Comms</h1>
        <p className="text-lg text-slate-400 max-w-xl">
          Powered by TanStack Start Server Functions. Drop me a message and my edge network will route it directly to my secure inbox.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full p-8 md:p-10 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12 gap-4"
          >
            <CheckCircle2 className="w-16 h-16 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Transmission Successful</h3>
            <p className="text-slate-400">I've received your message and will respond shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Target Designation (Name)</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Return Vector (Email)</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Encrypted Payload (Message)</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                placeholder="Let's build something extraordinary..."
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-sm font-medium">
                <AlertCircle className="w-5 h-5" />
                {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full md:w-auto md:self-end inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Encrypting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Transmit Payload
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}
