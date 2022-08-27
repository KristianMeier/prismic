import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TesteSlice = ({ slice }) => {
  return (
    <article>
      <img src={slice.primary.Image.url} alt={slice.primary.Image.alt} />
      <div>
        {/* Disse links copy-pastes manuelt fra SliceMachine hvor de genereres ved Slice oprettelse */}
        <PrismicRichText field={slice.primary.Name} />
        <PrismicRichText field={slice.primary.Age} />

        {/* Her gøres præcis det samme. API tilgås som et normalt API kald uden "@prismico/react" library*/}
        <h4>{slice.primary.Name[0].text}</h4>
        <h4>{slice.primary.Age[0].text}</h4>
      </div>
    </article>
  )
}

export default TesteSlice
