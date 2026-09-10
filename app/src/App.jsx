import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Icon from './components/Icon'
import { getWhatsAppUrl } from './lib/constants'
import { lenisStore } from './lib/lenis'
import HomePage from './pages/HomePage'
import TakeEatPage from './pages/TakeEatPage'
import BuildixPage from './pages/BuildixPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (!prefersReduced) {
            const lenis = new Lenis({
                duration: 1.15,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
            })
            lenisStore.current = lenis

            lenis.on('scroll', ScrollTrigger.update)
            const raf = (time) => lenis.raf(time * 1000)
            gsap.ticker.add(raf)
            gsap.ticker.lagSmoothing(0)

            return () => {
                gsap.ticker.remove(raf)
                lenis.destroy()
                lenisStore.current = null
            }
        }
    }, [])

    return (
        <div className="noise">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
            >
                דילוג לתוכן המרכזי
            </a>
            <Header />
            <ScrollToTop />
            <main id="main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/takeeat" element={<TakeEatPage />} />
                    <Route path="/buildix" element={<BuildixPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
            <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="שלחו הודעה בוואטסאפ"
                className="btn-glow fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_12px_36px_-8px_rgba(37,211,102,0.6)]"
            >
                <Icon name="whatsapp" size={27} />
            </a>
        </div>
    )
}
