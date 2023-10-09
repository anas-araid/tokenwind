'use client';
/* eslint-disable @next/next/no-img-element */
import { Snippet } from "@nextui-org/snippet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const COMMAND = 'npx tokenwind@latest generate';

export default function Home() {
  const [_, copy] = useCopyToClipboard()
  const { toast } = useToast();
  const [isCheckVisible, setCheckVisible] = useState(false);

  const handleCopy = async () => {
    const res = await copy(COMMAND);

    if (res) {
      setCheckVisible(true)

      setTimeout(() => {
        setCheckVisible(false)
      }, 5000);

      toast({
        variant: 'default',
        description: "Command has been copied to clipboard!",
        className: 'text-white',
        action: undefined
      })
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
          <Badge variant="outline" className="z-10 text-zinc-300 leading-5 border-zinc-600">Currently used for experimental purposes</Badge>
          <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            Tokenwind
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
            <div className="glowing-cli">
              <p className="absolute ml-4 left-2 leading-5 text-zinc-300 text-center text-md">{`~ ${COMMAND}`}</p>
              <Button
                variant="ghost"
                size="icon"
                className="absolute z-10 right-3 h-8 w-8 top-1/2 -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-10 hover:text-white"
                onClick={handleCopy}
              >
                {isCheckVisible ? <Check className="h-4 w-4 fade-in-25 animate-in" /> : <Copy className="h-4 w-4 fade-in-25 animate-in" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
