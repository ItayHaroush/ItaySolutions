import { useEffect } from 'react'
import Contact from '../components/Contact'

export default function ContactPage() {
    useEffect(() => {
        document.title = 'צור קשר | Itay Solutions'
    }, [])

    return <Contact />
}
