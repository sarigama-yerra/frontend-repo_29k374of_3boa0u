import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

const translations = {
  en: {
    brand: { name: 'Studio Nova', tagline: 'Visual Design · Web · Photo' },
    nav: { work: 'Work', services: 'Services', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Futuristic visuals for brands that want to stand out',
      subtitle: 'I design playful, high-conversion websites, graphic content (UGC), and photo productions. Interactive, modern, and made to perform.',
    },
    cta: { primary: 'Start a project', secondary: 'See work' },
    services: {
      title: 'What I do',
      web: { title: 'Websites & Product', desc: 'Elegant, animated web experiences that convert — from landing pages to product sites.' },
      ugc: { title: 'Graphic Design & UGC', desc: 'Brand kits, campaign assets, and content tailored for social and growth.' },
      photo: { title: 'Photo Production', desc: 'Creative direction, studio and on-location shoots for products and people.' },
    },
    work: { title: 'Selected work', cta: 'Tap to inquire about this project →' },
    contact: {
      title: 'Let’s build something bold',
      desc: 'Tell me about your brand and goals. I respond within 24 hours with ideas and next steps.',
      email: 'hello@studionova.design',
      ig: 'https://instagram.com/yourhandle',
      thanks: 'Thanks! Your message has been sent.',
    },
    form: { name: 'Your name', email: 'Email address', message: 'Project details', send: 'Send message' },
    footer: '© ' + new Date().getFullYear() + ' Studio Nova — All rights reserved.',
  },
  cs: {
    brand: { name: 'Studio Nova', tagline: 'Vizuální design · Web · Foto' },
    nav: { work: 'Projekty', services: 'Služby', about: 'O mně', contact: 'Kontakt' },
    hero: {
      title: 'Futuristické vizuály pro značky, které chtějí vyniknout',
      subtitle: 'Navrhuji hravé weby, grafický obsah (UGC) a fotoprodukce. Interaktivní, moderní a výkonné.',
    },
    cta: { primary: 'Začít projekt', secondary: 'Zobrazit projekty' },
    services: {
      title: 'Co nabízím',
      web: { title: 'Weby & Produkt', desc: 'Elegantní, animované webové zážitky — od landingů po produktové weby.' },
      ugc: { title: 'Grafika & UGC', desc: 'Branding, kampaně a obsah navržený pro sociální sítě a růst.' },
      photo: { title: 'Foto produkce', desc: 'Creative direction, ateliér i exteriér — produkty i portréty.' },
    },
    work: { title: 'Vybrané projekty', cta: 'Klikněte pro poptávku →' },
    contact: {
      title: 'Postavme něco odvážného',
      desc: 'Napište mi o vaší značce a cílech. Odpovím do 24 hodin s návrhy a dalšími kroky.',
      email: 'ahoj@studionova.design',
      ig: 'https://instagram.com/yourhandle',
      thanks: 'Děkuji! Vaše zpráva byla odeslána.',
    },
    form: { name: 'Jméno', email: 'E-mail', message: 'Detaily projektu', send: 'Odeslat zprávu' },
    footer: '© ' + new Date().getFullYear() + ' Studio Nova — Všechna práva vyhrazena.',
  }
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = useMemo(() => translations[lang], [lang])

  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar lang={lang} onToggleLang={() => setLang((l) => (l === 'en' ? 'cs' : 'en'))} t={t} />
      <main>
        <Hero t={t} />
        <Work t={t} />
        <Services t={t} />
        <Contact t={t} />
      </main>
      <footer className="py-10 text-center text-xs text-blue-200/70">{t.footer}</footer>
    </div>
  )
}
