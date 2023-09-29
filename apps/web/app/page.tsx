/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className="h-full relative overflow-hidden">
      <img
        src="/bg.png"
        className='absolute left-0 top-0 h-full w-full object-cover overflow-hidden scale-150 transform-gpu'
        alt={'bg'}
      />
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
            <a className="w-64 text-center inline-block space-x-2 rounded-full px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white/80 hover:bg-white/10 hover:text-white duration-150 hover:drop-shadow-cta ring-0" href="/deploy">
              Docs
            </a>
            <a className="w-64 text-center transition-all space-x-2 rounded-full px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800 bg-zinc-50 hover:bg-zinc-50/80 ring-1 ring-transparent hover:ring-zinc-600/80 duration-150 hover:drop-shadow-cta" href="/share">
              <span>Convert</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
