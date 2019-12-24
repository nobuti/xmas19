import React from 'react'

import * as Icons from './icons'

const Icon = ({ name, ...rest }) => {
  const Svg = Icons[name]
  if (!Svg) {
    console.error(`${name} doesn't exist in the ICON namespace`)
    return null
  }

  return <Svg {...rest} />
}

export default Icon
