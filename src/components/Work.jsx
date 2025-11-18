import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Playful Commerce',
    type: 'Web Design',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Bold Identity',
    type: 'UGC + Branding',
    img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Studio Portraits',
    type: 'Photo Production',
    img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work({ t }) {
  return (
    <section id="work" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500" />
          <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{t.work.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
            >
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <span className="text-xs text-blue-100/70">{p.type}</span>
                </div>
                <p className="text-sm text-blue-100/80 mt-2">{t.work.cta}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
