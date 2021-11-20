import React from 'react'

function BgLine() {
    return (
        <svg id="visual" width="100vh" height="100vh" xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"><g transform="translate(630 65)">
                {/* gradient added */}
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0%" stop-color="rgba(128, 139, 244, 1)" />
                        <stop offset="68%" stop-color="rgba(175, 121, 224, 1)" />
                        <stop offset="97%" stop-color="rgba(189, 115, 247, 1)" />
                    </linearGradient>
                </defs>
                <path d="M536.6 -425.6C682.9 -244.6 780.2 -22.2 740 175.1C699.9 372.3 522.4 544.3 342.4 581.2C162.3 618.1 -20.4 519.9 -182.4 424.3C-344.3 328.8 -485.6 235.9 -510.4 118.9C-535.2 1.9 -443.5 -139.4 -339 -310.9C-234.6 -482.4 -117.3 -684.2 39 -715.3C195.2 -746.3 390.4 -606.7 536.6 -425.6" fill="url(#gradient)" stroke="#808bf4" stroke-width="0">
                </path>
            </g>
        </svg >
    )
}

export default BgLine