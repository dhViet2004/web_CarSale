import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxury Auto Gallery | Premium Car Dealership',
  description: 'Discover your dream car at Luxury Auto Gallery. Browse our exclusive collection of premium vehicles, schedule test drives, and experience exceptional service.',
  generator: 'Next.js',
  icons: {
    icon: 'https://res.cloudinary.com/dofmnufq6/image/upload/v1750091297/f4aee19d-a48c-47c5-bed9-86aa37178f58_q6jkma.jpg',
    shortcut: 'https://res.cloudinary.com/dofmnufq6/image/upload/v1750091297/f4aee19d-a48c-47c5-bed9-86aa37178f58_q6jkma.jpg',
    apple: 'https://res.cloudinary.com/dofmnufq6/image/upload/v1750091297/f4aee19d-a48c-47c5-bed9-86aa37178f58_q6jkma.jpg',
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
