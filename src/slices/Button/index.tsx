import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { Button as ShadcnButton } from '@/components/ui/button'
import Link from 'next/link'

/**
 * Props for `Button`.
 */
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>

/**
 * Component for "Button" Slices.
 */
const Button: FC<ButtonProps> = ({ slice }) => {
  return (
    <ShadcnButton
      asChild
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Link href={slice.primary.link.text || '/another-page'}>
        {slice.primary.label}
      </Link>
    </ShadcnButton>
  )
}

export default Button
