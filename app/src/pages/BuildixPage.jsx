import { useEffect } from 'react'
import Buildix from '../components/Buildix'

export default function BuildixPage() {
    useEffect(() => {
        document.title = 'Buildix | Itay Solutions'
    }, [])

    return <Buildix />
}
