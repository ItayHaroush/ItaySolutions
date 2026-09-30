import { useEffect } from 'react'
import Hero from '../components/Hero'
import WhatIBuildTeaser from '../components/home/WhatIBuildTeaser'
import TakeEatShowcase from '../components/home/TakeEatShowcase'
import BuildixShowcase from '../components/home/BuildixShowcase'
import CulinaryNorth from '../components/CulinaryNorth'
import HowIWork from '../components/home/HowIWork'
import ProjectsTeaser from '../components/home/ProjectsTeaser'
import AboutTeaser from '../components/home/AboutTeaser'
import ClosingCTA from '../components/home/ClosingCTA'

export default function HomePage() {
    useEffect(() => {
        document.title = 'Itay Solutions — אני בונה מערכות דיגיטליות שעובדות בעולם האמיתי'
    }, [])

    return (
        <>
            <Hero />
            <WhatIBuildTeaser />
            <TakeEatShowcase />
            <BuildixShowcase />
            <CulinaryNorth />
            <HowIWork />
            <ProjectsTeaser />
            <AboutTeaser />
            <ClosingCTA />
        </>
    )
}
