import { useEffect } from 'react'
import SelectedProjects from '../components/SelectedProjects'

export default function ProjectsPage() {
    useEffect(() => {
        document.title = 'פרויקטים | Itay Solutions'
    }, [])

    return <SelectedProjects />
}
