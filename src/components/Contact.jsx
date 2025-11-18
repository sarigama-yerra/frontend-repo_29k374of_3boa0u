import { motion } from 'framer-motion'

export default function Contact({ t }) {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{t.contact.title}</h2>
            <p className="mt-3 text-blue-100/80 max-w-prose">{t.contact.desc}</p>

            <div className="mt-6 grid gap-3 text-blue-100/80 text-sm">
              <p><span className="text-white">Email:</span> <a href={`mailto:${t.contact.email}`} className="hover:underline">{t.contact.email}</a></p>
              <p><span className="text-white">Instagram:</span> <a href={t.contact.ig} target="_blank" className="hover:underline">@{t.contact.ig.replace('https://instagram.com/','')}</a></p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            onSubmit={(e) => { e.preventDefault(); alert(t.contact.thanks); }}
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-blue-100/80 mb-2">{t.form.name}</label>
                <input className="w-full rounded-xl bg-slate-900/80 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50" required />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-2">{t.form.email}</label>
                <input type="email" className="w-full rounded-xl bg-slate-900/80 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50" required />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-2">{t.form.message}</label>
                <textarea rows="5" className="w-full rounded-xl bg-slate-900/80 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50" required />
              </div>
              <button className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-shadow">
                {t.form.send}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
