import Navbar from '../components/Navbar'
import Playercenter from '../components/Playercenter'


export const metadata = {
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
          <Playercenter />
          {children}
        </body>
      </html>
    </>
  )
}
