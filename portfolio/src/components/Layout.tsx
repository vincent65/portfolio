import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout( { children }: LayoutProps ) {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <nav className="p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">VY</div>
          <div className="space-x-4">
            
            <Link href="/">HOME</Link>
            <Link href="/research">EXPERIENCES</Link>
            <Link href="/honors">HONORS</Link>
            <Link href="/projects">PROJECTS</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}