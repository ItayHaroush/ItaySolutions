import { useEffect } from 'react'
import CulinaryNorth from '../components/CulinaryNorth'

export default function CulinaryNorthPage() {
    useEffect(() => {
        document.title = 'קולינריה צפון | Itay Solutions'
    }, [])

    return <CulinaryNorth standalone />
}
