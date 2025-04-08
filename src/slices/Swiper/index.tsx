'use client'

import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'

/**
 * Props for `Swiper`.
 */
export type SwiperProps = SliceComponentProps<Content.SwiperSlice>

/**
 * Component for "Swiper" Slices.
 */
const Swiper: FC<SwiperProps> = ({ slice }) => {
  return (
    <section
      className="m-2"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SwiperReact spaceBetween={12} slidesPerView={3} navigation>
        {slice.primary.swiper_image.map((item) => (
          <SwiperSlide key={item.image.id}>
            <Image
              className="rounded-lg"
              src={item.image.url ?? ''}
              alt={item.image.alt ?? ''}
              height={item.image.dimensions?.height}
              width={item.image.dimensions?.width}
            />
          </SwiperSlide>
        ))}
      </SwiperReact>
    </section>
  )
}

export default Swiper
