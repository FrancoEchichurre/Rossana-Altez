'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
    useEffect(() => {
        // Disable browser's default scroll restoration to avoid jumping back down
        if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }

        window.scrollTo(0, 0)

        // Re-enable it on cleanup if needed, but for "always top on reload" manual is often safer while this component is active.
        // However, usually we just want the initial load to be at top.
    }, [])

    return null
}
