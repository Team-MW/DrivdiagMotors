import React from 'react'

export default function SnapchatPromo() {
    return (
        <div className="snap-container no-border-top">
            <div className="snap-bg-grid"></div>
            <div className="section__inner">
                <h3 className="snap-title">
                    SUIVEZ NOTRE QUOTIDIEN SUR SNAPCHAT
                    <span className="snap-highlight">@labonneauto31</span>
                </h3>
                <div style={{ marginTop: '20px' }}>
                    <div className="snap-qr-wrapper">
                        <img src="/SNAPDIAG.png" alt="Snapchat SNAPDIAG" className="snap-qr-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
