import { Theme } from "@/components/Theme";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg['/bg.jp'] bg-no-repeat bg center bg-cover">
      <section className="bg-black/60 minh-dvh">
        <div className="text-white md:w-2/3 mx-auto md:py-20 p-3">
          <h1 className="font-extrabold">Think Big. <span style={{color: Theme.secondary}}></span> Grow bigger</h1>
          <p>
            Naija Venture Hub is a platform that connects aspiring entrepreneurs with experienced business
             owners who share practical advice, real-life experiences, challenges, startup costs, and 
             lessons learned to help beginners make informed decisions before starting their own businesses
              in Nigeria.
          </p>
          
          </div>
          <div className="flex item-center ">
            <Link href={"#"} style={{backgroundColor: Theme.primary }} className="text-white
            font-semibold px-8 py-3 text-xl rounded-full max-md:w-full max-md">Get Started</Link>
            <Link href={"#"} className="" >Trending Ideas </Link>
          </div>
      </section>

    </main>
  );
}
