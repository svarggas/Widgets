import { useState, useEffect } from "react"

const Route = ({ path, children }) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect(() => {

        const onLocationChange = () => setCurrentPath(window.location.pathname)

        window.addEventListener('popstate', onLocationChange, {capture: true})
        return () => window.removeEventListener('popstate', onLocationChange, {capture: true})
    
    }, [])
    
    return currentPath === path ? children : null
}

export default Route