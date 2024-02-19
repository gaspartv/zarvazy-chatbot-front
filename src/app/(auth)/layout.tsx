import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Zarvazy Chatbot - Autenticação',
  description: 'O melhor chatbot do Brasil.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_br">
      <body style={{ backgroundColor: '#D9D9D9', fontSize: 14 }}>
        {children}
      </body>
    </html>
  )
}
