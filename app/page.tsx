import Link from "next/link";

export default function Home() {
  return (
   <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="bg-black/60 min-h-dvh">
        <h1>Think Big. Grow Bigger</h1>
        <p>
          Naija Venture Hub is a platform that connects aspiring entrepreneurs with experienced business owners who share practical advice, real-life experiences, challenges, startup costs, and lessons learned to help beginners make informed decisions before starting their own businesses in Nigeria.
        </p>
        <div>
          <Link href={"#"}>Get Started</Link>
          <Link href={"#"}>Trending Ideas</Link>
        </div>
      </section>
   </main>
  );
}
