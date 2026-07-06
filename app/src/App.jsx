import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import OngoingWork from './components/OngoingWork'
import DigitalManagement from './components/DigitalManagement'
import About from './components/About'
import Trust from './components/Trust'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Icon from './components/Icon'
import { getWhatsAppUrl } from './lib/constants'

gsap.registerPlugin(ScrollTrigger)

const SECTIONS = ['home', 'portfolio', 'ongoing', 'digital', 'about', 'trust', 'contact']

export default function App() {
    const [activeSection, setActiveSection] = useState('home')
    const lenisRef = useRef(null)

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (!prefersReduced) {
            const lenis = new Lenis({
                duration: 1.15,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
            })
            lenisRef.current = lenis

            lenis.on('scroll', ScrollTrigger.update)
            const raf = (time) => lenis.raf(time * 1000)
            gsap.ticker.add(raf)
            gsap.ticker.lagSmoothing(0)

            return () => {
                gsap.ticker.remove(raf)
                lenis.destroy()
                lenisRef.current = null
            }
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const current = SECTIONS.find((section) => {
                const el = document.getElementById(section)
                if (!el) return false
                const rect = el.getBoundingClientRect()
                return rect.top <= 120 && rect.bottom >= 120
            })
            if (current) setActiveSection(current)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId)
        if (!el) return
        if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { offset: -72, duration: 1.4 })
        } else {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="noise">
            <a
                href="#portfolio"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
            >
                דילוג לתוכן המרכזי
            </a>
            <Header activeSection={activeSection} scrollToSection={scrollToSection} />
            <main>
                <Hero scrollToSection={scrollToSection} />
                <FeaturedWork />
                <OngoingWork />
                <DigitalManagement />
                <About />
                <Trust />
                <Contact />
            </main>
            <Footer scrollToSection={scrollToSection} />
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
