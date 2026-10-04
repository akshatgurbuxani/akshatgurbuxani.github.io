import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-container grid min-h-screen place-items-center py-16">
      <div className="relative max-w-2xl border-y border-[var(--line-strong)] py-16 text-center">
        <p className="eyebrow mb-6">Signal lost / 404</p>
        <h1 className="display-type text-7xl leading-none text-[var(--chalk)] sm:text-9xl">Wrong orbit.</h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[var(--ink-soft)]">That page is not part of this system. The main portfolio is still transmitting.</p>
        <Link href="/" className="text-link mt-8">Return home →</Link>
      </div>
    </main>
  );
}
