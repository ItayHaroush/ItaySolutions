import { useEffect } from 'react'
import About from '../components/About'
import Trust from '../components/Trust'

export default function AboutPage() {
    useEffect(() => {
        document.title = 'עליי | Itay Solutions'
    }, [])

    return (
        <>
            <About />
            <Trust />
        </>
    )
}
