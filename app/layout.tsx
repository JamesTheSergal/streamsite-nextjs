import "./globals.css"
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
        <body className="bg-[#0f0f0f]">
          <Navbar />
          {children}
        </body>
      </html>
    </>
  )
}
