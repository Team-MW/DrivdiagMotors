import React, { useEffect } from 'react'

export default function CalendlyWidget() {
    useEffect(() => {
        const head = document.querySelector('head')
        const script = document.createElement('script')
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        script.setAttribute('async', 'true')
        head.appendChild(script)

        return () => {
            // Cleanup if necessary, though widget.js usually handles itself or stays global
            if (head.contains(script)) {
                head.removeChild(script)
            }
        }
    }, [])

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mwcrea-agency/30min"
            style={{ minWidth: '320px', width: '100%', height: '700px' }}
        />
    )
}
