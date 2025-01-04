import * as React from 'react'

import { EmblaOptionsType } from 'embla-carousel'

import EmblaCarousel from './components/embla/embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const PreviewBirthdayCard: React.FC = () => {
   return (
      <React.Fragment>
         <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </React.Fragment>
   )
}
