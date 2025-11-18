import { useState } from 'react'
import { Menu, Globe } from 'lucide-react'

export default function Navbar({ lang, onToggleLang, t }) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: t.nav.work },
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-fuchsia-500 shadow-lg"></div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-tight">{t.brand.name}</p>
                <p className="text-xs text-blue-200/80">{t.brand.tagline}</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={onToggleLang}
                className="inline-flex items-center gap-2 text-xs md:text-sm text-white/90 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{lang.toUpperCase()}</span>
              </button>

              <button
                className="md:hidden inline-flex items-center justify-center p-2 text-white/90 hover:text-white"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-blue-100/80 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
