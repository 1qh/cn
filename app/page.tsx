import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Home() {
  return (
    <p className='h-screen flex'>
      <Link
        href='/ex/mail'
        className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'm-auto')}>
        Examples
      </Link>
    </p>
  )
}
