import { type FC } from 'react'
import { type Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import {
  PrismicRichText,
  type SliceComponentProps,
  type JSXMapSerializer,
} from '@prismicio/react'

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>
  },
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>
    }
  },
  heading1: ({ children }) => {
    return <h1 className="font-extrabold text-3xl">{children}</h1>
  },
  heading2: ({ children }) => {
    return <h1 className="font-bold text-2xl">{children}</h1>
  },
  heading3: ({ children }) => {
    return <h1 className="font-semibold text-xl">{children}</h1>
  },
}

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>

/**
 * Component for "RichText" Slices.
 */
const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  )
}

export default RichText
