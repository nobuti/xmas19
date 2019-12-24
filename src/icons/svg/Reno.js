import React from 'react'

const Svg = ({width, height}) => <svg width={width} height={height} viewBox="0 0 512 512"><circle cx="196" cy="316" r="15"/><circle cx="316" cy="316" r="15"/><path d="M256 361c-24.813 0-45 20.187-45 45s20.187 45 45 45 45-20.187 45-45-20.187-45-45-45zm0 60c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15z"/><path d="M346 151h90c24.813 0 45-20.187 45-45V76c0-8.284-6.716-15-15-15s-15 6.716-15 15v30c0 8.271-6.729 15-15 15h-15V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v46h-15c-8.271 0-15-6.729-15-15V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v31c0 24.813 20.187 45 45 45h15v30h-45c-24.813 0-45 20.187-45 45v22.351c-.44-.146-.875-.306-1.317-.447-28.652-9.134-58.702-9.135-87.353-.004-.447.142-.885.304-1.33.451V166c0-24.813-20.187-45-45-45h-45V91h15c24.813 0 45-20.187 45-45V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v31c0 8.271-6.729 15-15 15h-15V15c0-8.284-6.716-15-15-15S91 6.716 91 15v106H76c-8.271 0-15-6.729-15-15V76c0-8.284-6.716-15-15-15s-15 6.716-15 15v30c0 24.813 20.187 45 45 45h90c8.271 0 15 6.729 15 15v37.021c-13.355 8.891-25.042 20.273-34.471 33.436C139.242 221.405 123.814 211 106 211H46c-8.284 0-15 6.716-15 15v30c0 24.813 20.187 44.9 45 44.9h45.788c-3.254 28.884 2.633 56.525 17.557 82.074 5.55 9.503 9.588 20.794 12.283 34.369C157.343 470.269 202.177 512 256 512c53.808 0 98.597-41.701 104.36-94.543 2.708-13.633 6.782-25.013 12.39-34.643 14.853-25.503 20.708-52.991 17.461-81.814H436c24.813 0 45-20.187 45-45v-30c0-8.284-6.716-15-15-15h-60c-17.814 0-33.242 10.405-40.529 25.456-9.428-13.165-21.114-24.546-34.471-33.437V166c0-8.271 6.729-15 15-15zM121 271H76c-8.271 0-15-6.729-15-15v-15h45c8.271 0 15 6.729 15 15v15zm270-15c0-8.271 6.729-15 15-15h45v15c0 8.271-6.729 15-15 15h-45v-15zm-31.468 42.142c4.14 24.582-.136 47.99-12.706 69.573-9.183 15.768-14.308 33.261-17.191 51.125C323.256 458.36 287.198 482 256 482c-35.579 0-67.928-27.765-73.638-63.216-2.872-17.836-7.971-35.287-17.113-50.941-12.664-21.682-16.952-45.205-12.745-69.916 6.503-38.201 33.562-70.17 68.935-81.444 22.847-7.282 46.282-7.281 69.132.003 35.442 11.299 62.512 43.351 68.961 81.656z"/></svg>

Svg.defaultProps = {
  width: 256,
  height: 256
}

export default Svg

