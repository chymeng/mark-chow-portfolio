import React from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt'

const Svg = ({ icon, a }) => (
  <a href={a} target="_blank" rel="noopener noreferrer">
    <SvgLoader path={icon} className="icon-container">
      <SvgProxy selector={'#batman'} />
    </SvgLoader>
  </a>
)

export default Svg
