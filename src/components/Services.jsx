import { motion } from 'framer-motion'
import { Sparkles, Palette, Camera, Code2 } from 'lucide-react'

const services = (t) => ([
  {
    icon: <Code2 className="w-6 h-6" />, title: t.services.web.title, desc: t.services.web.desc,
    tags: ['Webflow', 'Framer', 'React', 'Three.js']
  },
  {
    icon: <Palette className="w-6 h-6" />, title: t.services.ugc.title, desc: t.services.ugc.desc,
    tags: ['UGC', 'Branding', 'Social', 'Motion']
  },
  { icon: <Camera className="w-6 h-6" />, title: t.services.photo.title, desc: t.services.photo.desc, tags: ['Studio', 'Portrait', 'Product'] },
])

export default function Services({ t }) {
  const items = services(t)
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(217,70,239,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500 grid place-items-center text-white"><Sparkles className="w-4 h-4" /></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{t.services.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-white/20"
            >
              <div className="text-white/90 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-white">
                  {s.icon}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-blue-100/80 text-sm">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs text-blue-100/70 bg-white/5 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
