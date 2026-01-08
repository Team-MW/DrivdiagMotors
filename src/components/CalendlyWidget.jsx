import React, { useEffect } from 'react'

export default function CalendlyWidget() {
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const head = document.querySelector('head')
        const script = document.createElement('script')
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        script.setAttribute('async', 'true')
        head.appendChild(script)

        const handleMessage = (e) => {
            // Calendly emits events like 'calendly.profile_page.viewed' when ready
            if (e.data && e.data.event && e.data.event.indexOf('calendly') === 0) {
                setIsLoading(false);
            }
        };

        window.addEventListener('message', handleMessage);

        // Fallback timeout in case event is missed or delayed
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            window.removeEventListener('message', handleMessage);
            clearTimeout(timer);
            if (head.contains(script)) {
                head.removeChild(script)
            }
        }
    }, [])

    return (
        <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            border: '1px solid #333',
            background: '#fff',
            position: 'relative'
        }}>
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        border: '4px solid #f3f3f3',
                        borderTop: '4px solid #e10012',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }} />
                    <style>{`
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            )}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/mwcrea-agency/30min?hide_gdpr_banner=1"
                style={{ minWidth: '320px', width: '100%', height: '700px' }}
            />
        </div>
    )
}
