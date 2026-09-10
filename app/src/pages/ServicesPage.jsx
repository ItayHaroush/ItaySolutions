import { useEffect } from 'react'
import WhatIBuild from '../components/WhatIBuild'
import OngoingWork from '../components/OngoingWork'
import DigitalManagement from '../components/DigitalManagement'

export default function ServicesPage() {
    useEffect(() => {
        document.title = 'שירותים | Itay Solutions'
    }, [])

    return (
        <>
            <WhatIBuild />
            <OngoingWork />
            <DigitalManagement />
        </>
    )
}
