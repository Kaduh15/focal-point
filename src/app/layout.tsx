import '@/styles/reset.css'
import type { Metadata } from 'next'
import { Inter_Tight as InterTight } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = InterTight({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Focal Point',
  description: 'Uma ferramenta para criar pontos focais em seus projetos',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  )
}
