import { BackgroundLines } from "@/components/background-lines";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-items-center min-h-screen pb-4  gap-4 sm:p-2 font-[family-name:var(--font-geist-sans)] ">
      <nav>
        <ModeToggle />
      </nav>
      <main className="flex flex-col gap-8 items-center justify-items-center w-full ">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 relative">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Welcome to Random Shit, <br /> by Sahin Alam.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            This is some random shit that I (Sahin Alam) found very useful
          </p>
        </BackgroundLines>
        <a
          href="https://github.com/Ruler45/Next.js-15-SA_47.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Fork from Github</Button>
        </a>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/ruler45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit my Github →
        </a>
      </footer>
    </div>
  );
}
