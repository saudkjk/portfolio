import { useEffect, useRef, useState } from 'react'
import { debounce } from '../utils/utils'

export function useScrollHandler() {
    const [selected, setSelected] = useState('Home')
    const selectedRef = useRef(selected)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            let newSelected = selectedRef.current

            // TODO: replace absolute positions
            if (scrollY <= 480) newSelected = "Home"
            else if (scrollY <= 798) newSelected = "Skills"
            else if (scrollY <= 2800) newSelected = "Projects"
            else if (scrollY <= 3127) newSelected = "Education"
            else newSelected = "Contact"

            if (newSelected !== selectedRef.current) {
                setSelected(newSelected)
                selectedRef.current = newSelected
            }
        }

        const debouncedHandleScroll = debounce(handleScroll, 20)
        window.addEventListener('scroll', debouncedHandleScroll)
        return () => window.removeEventListener('scroll', debouncedHandleScroll)
    }, [])

    return selected
}