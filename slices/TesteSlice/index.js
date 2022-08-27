import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TesteSlice = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.MinTitel} />
      <PrismicRichText field={slice.primary.MinDescription} />
      {console.log(slice)}
    </section>
  )
}

export default TesteSlice
