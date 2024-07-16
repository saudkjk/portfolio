import { useState, useEffect } from 'react'

export default function useDebounce(value, delay = 800) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}