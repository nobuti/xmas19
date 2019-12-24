import React from 'react'

const Svg = ({width, height}) => <svg width={width} height={height} viewBox="0 0 512 512"><circle cx="136" cy="376" r="15"/><circle cx="196" cy="256" r="15"/><circle cx="256" cy="376" r="15"/><circle cx="376" cy="376" r="15"/><circle cx="316" cy="256" r="15"/><path d="M361 150.904V105c0-24.813-20.187-45-45-45h-15V45c0-24.813-20.187-45-45-45s-45 20.187-45 45v15h-15c-24.813 0-45 20.187-45 45v45.904C96.913 185.779 61 246.753 61 316c0 108.075 87.477 196 195 196s195-87.925 195-196c0-69.247-35.913-130.221-90-165.096zM241 45c0-8.271 6.729-15 15-15s15 6.729 15 15v15h-30V45zm-60 60c0-8.271 6.729-15 15-15h120c8.271 0 15 6.729 15 15v30.085C307.9 125.375 282.564 120 256 120s-51.9 5.375-75 15.085V105zm75 45c88.868 0 161.54 71.052 164.868 159.654l-34.261-34.261c-5.857-5.858-15.355-5.857-21.213 0L316 324.787l-49.394-49.394c-5.857-5.858-15.355-5.858-21.213 0L196 324.787l-49.394-49.394c-5.857-5.858-15.355-5.857-21.213 0l-34.261 34.261C94.46 221.052 167.132 150 256 150zm0 332c-79.772 0-146.5-57.251-161.731-133.056L136 307.213l49.394 49.394c5.857 5.858 15.355 5.858 21.213 0L256 307.213l49.394 49.394C308.322 359.536 312.161 361 316 361s7.678-1.464 10.606-4.393L376 307.213l41.731 41.731C402.5 424.749 335.772 482 256 482z"/></svg>

Svg.defaultProps = {
  width: 256,
  height: 256
}

export default Svg
