import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex fixed items-center justify-between left-0 px-5 py-4 top-0 w-full z-10 transition-all duration-[600ms] border-b-transparent">
      <a href="/"><Image src="/images/logo.svg" width="220" height="32" alt="Dynamic Studio"/></a>
    </header>
  )
}