import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
        <div className='flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0'>
          <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            Tokenwind
            {/* Convert design tokens<br></br>into <br></br>Tailwind themes */}
          </h1>
          <p className="mt-6 leading-5 text-zinc-300 sm:text-center">
            Instantly convert your Figma&apos;s design token into ready to import Tailwind themes.
          </p>
          <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ">
            <a className="w-64 text-center transition-all space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800 bg-zinc-50 ring-1 ring-transparent hover:text-zinc-100 hover:ring-zinc-600/80 hover:bg-zinc-900/20 duration-150 hover:drop-shadow-cta" href="/share">
              <span>Getting Started</span>
              <span aria-hidden="true">→</span>
            </a>
            <a className="w-64 text-center inline-block space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white ring-1 ring-zinc-600 hover:bg-white hover:text-zinc-900 duration-150 hover:ring-white hover:drop-shadow-cta" href="/deploy">
              Docs
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
