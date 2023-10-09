'use client';
/* eslint-disable @next/next/no-img-element */
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const COMMAND = 'npx tokenwind@latest generate';

export default function Home() {
  const [value, copy] = useCopyToClipboard()

  const handleCopy = async () => {
    const res = await copy(COMMAND)
    if (res) {
      // TOAST
    }
  }

  return (
    <main className="h-full relative overflow-hidden">
      <img
        src="/bg.png"
        className='absolute left-0 top-0 h-full w-full object-cover overflow-hidden scale-150 transform-gpu'
        alt={'bg'}
      />
      <div className="relative flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
        <div className='flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0'>
          <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            Tokenwind
            {/* Convert design tokens<br></br>into <br></br>Tailwind themes */}
          </h1>
          <p className="mt-6 leading-5 text-zinc-300 text-center">
            Instantly convert your W3C design tokens into ready to import Tailwind themes.
          </p>
          <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ">
            <a
              className="w-32 text-center inline-block space-x-2 rounded-full px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white/80 hover:bg-white/10 hover:text-white duration-150 hover:drop-shadow-cta ring-0"
              href="https://github.com/anas-araid/tokenwind"
              target="_blank"
            >
              Github
            </a>
            <a className="w-32 text-center transition-all space-x-2 rounded-full px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800 bg-zinc-50 hover:bg-zinc-50/80 ring-1 ring-transparent hover:ring-zinc-600/80 duration-150 hover:drop-shadow-cta" href="/convert">
              <span>Try it online</span>
            </a>
          </div>
          <div className="flex flex-col flex-wrap mt-12">
            {/* <div className="relative overflow-hidden w-24 h-12 rounded-xl">
              <div className="asdf rounded-xl"></div>
              <div className="border-conic"></div>
            </div>*/}

            <div className="glowing-cli">
              <p className="absolute ml-4 left-2 leading-5 text-zinc-300 text-center text-md">~ npx tokenwind@latest generate</p>
              <Button
                variant="ghost"
                size="icon"
                className="absolute z-10 right-3 h-8 w-8 top-1/2 -translate-y-1/2 hover:bg-white hover:bg-opacity-10 hover:text-white"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
