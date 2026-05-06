import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6 text-white">
      <section className="glass-card max-w-lg p-8 text-center">
        <p className="section-kicker justify-center">404</p>
        <h1 className="mt-5 text-3xl font-black">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="premium-button mt-7 h-12 px-7">
          Back Home
        </Link>
      </section>
    </main>
  );
}
