import Navbar from "../components/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Snergal.live',
  description: 'Streaming platform for Snergal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  )
}
