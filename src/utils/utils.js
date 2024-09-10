export function debounce(func, wait) {
    let timeout
    return function (...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

export const getClosestSection = (scrollY, windowHeight, documentHeight, sectionRefs) => {
    const sectionOffsets = sectionRefs.map((ref) => ref.current?.offsetTop || 0)

    if (documentHeight - (scrollY + windowHeight) <= 75) {
        return 'Contact'
    }

    let low = 0
    let high = sectionOffsets.length - 1
    let closestSection = 'Home'

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)

        const currentDifference = Math.abs(scrollY - sectionOffsets[mid])
        const nextDifference = mid < sectionOffsets.length - 1 ? Math.abs(scrollY - sectionOffsets[mid + 1]) : Infinity
        const prevDifference = mid > 0 ? Math.abs(scrollY - sectionOffsets[mid - 1]) : Infinity

        if (currentDifference <= nextDifference && currentDifference <= prevDifference) {
            closestSection = getSectionName(mid)
            break
        } else if (scrollY < sectionOffsets[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return closestSection
}

const getSectionName = (index) => {
    switch (index) {
        case 0:
            return 'Home'
        case 1:
            return 'Skills'
        case 2:
            return 'Projects'
        case 3:
            return 'Education'
        case 4:
            return 'Contact'
        default:
            return 'Home'
    }
}