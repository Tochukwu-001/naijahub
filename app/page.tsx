import { Theme } from "@/components/Theme";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="bg-black/70 min-h-dvh">
        <div className="text-white md:w-2/3 mx-auto md:py-20 p-3 flex items-center justify-center flex-col gap-10">
          <h1 className="font-extrabold text-5xl uppercase">Think Big. <span style={{color: Theme.secondary}}>Grow Bigger!</span></h1>
          <p className="text-2xl text-center font-light">
            Naija Venture Hub is a platform that connects aspiring entrepreneurs
            with experienced business owners who share practical advice,
            real-life experiences, challenges, startup costs, and lessons
            learned to help beginners make informed decisions before starting
            their own businesses in Nigeria.
          </p>
          <div className="flex items-center gap-5">
            <Link href={"#"} style={{backgroundColor: Theme.primary}} className="text-white font-semibold px-8 py-3 text-xl rounded-full">Get Started</Link>
            <Link href={"#"} className="font-semibold px-8 py-3 text-xl rounded-full flex items-center gap-1 border border-neutral-200">Trending Ideas <TiArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
