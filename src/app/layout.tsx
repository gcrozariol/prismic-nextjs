import './globals.css'

import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-[calc(100vh-80px-441px)]">{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
