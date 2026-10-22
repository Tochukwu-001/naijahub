import { Theme } from "@/components/Theme";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { auth, signIn } from "@/auth";

export default async function SignIn() {

  const session = await auth()

  console.log(session);  

  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center p-4 md:p-8">
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/80 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-2xl my-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors mb-6"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-extrabold uppercase text-white tracking-tight">
            Welcome <span style={{ color: Theme.secondary }}>Back</span>
          </h1>
          <p className="text-neutral-400 text-sm">
            Sign in to access real business insights, costs, and mentors.
          </p>
        </div>

        {/* Google Sign-In Server Form */}
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="w-full bg-white text-neutral-900 font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-100 transition-all shadow-md text-sm mb-6 cursor-pointer"
          >
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="border-t border-neutral-800 w-full" />
          <span className="bg-neutral-900 px-3 text-xs uppercase text-neutral-500 font-semibold absolute">
            Or sign in with email
          </span>
        </div>

        {/* Email & Password Server Form */}
        <form className="flex flex-col gap-5">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-neutral-300 uppercase tracking-wider"
            >
              Email Address
            </label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-4 text-neutral-500 text-sm" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-600"
                required
              />
            </div>
          </div>

          {/* Password Field with Server-Friendly Toggle */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-xs font-semibold text-neutral-300 uppercase tracking-wider"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium hover:underline"
                style={{ color: Theme.secondary }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* CSS/HTML Toggle without client state */}
            <details className="group">
              <summary className="list-none cursor-pointer">
                <div className="relative flex items-center">
                  <FaLock className="absolute left-4 text-neutral-500 text-sm" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl pl-11 pr-11 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-600 group-open:hidden"
                    required
                  />
                  <input
                    type="text"
                    placeholder="••••••••"
                    className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl pl-11 pr-11 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-600 hidden group-open:block"
                    readOnly
                  />
                  <span className="absolute right-4 text-neutral-500 hover:text-neutral-300 text-sm">
                    <FaEye />
                  </span>
                </div>
              </summary>
            </details>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="w-4 h-4 rounded bg-neutral-950 border-neutral-800 text-emerald-600 focus:ring-0 focus:ring-offset-0 accent-[#2F3E2C] cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-xs text-neutral-400 cursor-pointer select-none"
            >
              Keep me signed in on this device
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ backgroundColor: Theme.primary }}
            className="w-full text-white font-semibold py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity mt-2 shadow-lg cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Footer / Sign Up Link */}
        <p className="text-center text-xs text-neutral-400 mt-8">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-bold hover:underline"
            style={{ color: Theme.secondary }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
