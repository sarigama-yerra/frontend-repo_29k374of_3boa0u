import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ t }) {
  return (
    <section id="top" className="relative min-h-[95vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-8 min-h-[70vh]">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(56,189,248,0.2)]"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-blue-100/90 text-lg md:text-xl max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.15 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-shadow">
                {t.cta.primary}
              </a>
              <a href="#work" className="px-5 py-3 rounded-xl border border-white/10 text-white/90 hover:text-white hover:border-white/20 transition-colors">
                {t.cta.secondary}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
