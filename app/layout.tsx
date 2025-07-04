import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HM',
  description: 'Discover your dream car at Luxury Auto Gallery. Browse our exclusive collection of premium vehicles, schedule test drives, and experience exceptional service.',
  generator: 'Next.js',
  icons: {
    icon: 'https://res.cloudinary.com/dofmnufq6/image/upload/v1751466569/web_brandlogo_z0aegn.png',
    shortcut: 'https://res.cloudinary.com/dofmnufq6/image/upload/v1751466569/web_brandlogo_z0aegn.png',
    apple: 'https://res.cloudinary.com/dofmnufq6/image/upload/v1751466569/web_brandlogo_z0aegn.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
