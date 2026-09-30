import { useEffect } from 'react'
import LeFranceCaseStudy from '../components/LeFranceCaseStudy'

export default function LeFrancePage() {
    useEffect(() => {
        document.title = 'הצרפתייה הקטנה | Itay Solutions'
    }, [])

    return <LeFranceCaseStudy />
}
