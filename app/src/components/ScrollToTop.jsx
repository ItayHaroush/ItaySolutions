import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lenisStore } from '../lib/lenis'

// Resets scroll position on route change (React Router doesn't do this by default);
// scrolls to the hash target instead when the new URL includes one (e.g. /services#lemlem-case-study).
export default function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        const target = hash ? document.getElementById(hash.slice(1)) : null
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (lenisStore.current) {
            lenisStore.current.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo(0, 0)
        }
        ScrollTrigger.refresh()
    }, [pathname, hash])

    return null
}
