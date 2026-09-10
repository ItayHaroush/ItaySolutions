// Shared handle to the single app-wide Lenis instance (created in App.jsx),
// so any component can trigger a smooth scroll without prop-drilling.
export const lenisStore = { current: null }

export const scrollToId = (id, opts = {}) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenisStore.current) {
        lenisStore.current.scrollTo(el, { offset: -72, duration: 1.4, ...opts })
    } else {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}
