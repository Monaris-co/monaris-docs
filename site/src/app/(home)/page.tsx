import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  Shield,
  Award,
  Bot,
  Zap,
} from 'lucide-react';

const FEATURES = [
  {
    icon: FileText,
    title: 'Monaris AR/AP',
    desc: 'Create invoices, send them, get paid. Every cleared invoice builds your Score.',
    href: '/docs/ar-ap',
  },
  {
    icon: Shield,
    title: 'Monaris Private',
    desc: 'Send and receive stablecoins that are private by default. One click, zero gas.',
    href: '/docs/private',
  },
  {
    icon: Award,
    title: 'Score & Credit',
    desc: 'A 0 to 1000 cashflow reputation that unlocks income-backed credit and BNPL.',
    href: '/docs/score-credit',
  },
  {
    icon: Bot,
    title: 'Mona AI',
    desc: 'The intelligence layer across every product, built on your real numbers.',
    href: '/docs/mona',
  },
];

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      {/* Lime radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full blur-[64px]"
        style={{ background: 'rgba(200,255,0,0.12)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full blur-[64px]"
        style={{ background: 'rgba(124,181,24,0.10)' }}
      />

      {/* Hero */}
      <section className="relative mx-auto w-full max-w-3xl px-6 pb-10 pt-24 text-center">
        <span
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          style={{
            border: '1px solid rgba(200,255,0,0.4)',
            background: 'rgba(200,255,0,0.08)',
            color: 'var(--mn-lime-dark)',
          }}
        >
          <Zap size={16} /> Private finance for the stablecoin economy
        </span>
        <h1 className="mb-6 text-5xl font-bold leading-[1.06] tracking-[-0.025em] sm:text-6xl">
          Your cashflow is your{' '}
          <span
            style={{
              background: 'var(--mn-gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            credit score.
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-fd-muted-foreground">
          Onchain AR/AP, private-by-default payments, and income-backed credit.
          Every cleared invoice builds a real-time financial identity. No bank,
          no bureau, no collateral.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex h-14 items-center gap-2 rounded-xl px-10 text-lg font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'var(--mn-gradient-primary)',
              color: 'var(--mn-ink)',
              boxShadow: 'var(--mn-shadow-lg)',
            }}
          >
            Read the docs <ArrowRight size={20} />
          </Link>
          <a
            href="https://app.monaris.co"
            className="inline-flex h-14 items-center gap-2 rounded-xl border-2 px-10 text-lg font-semibold transition-colors"
            style={{ borderColor: 'var(--mn-lime)', color: 'var(--mn-lime-dark)' }}
          >
            Open App <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Settlement Waterfall demo */}
      <section className="relative mx-auto w-full max-w-2xl px-6 pb-6">
        <div className="rounded-[20px] border border-fd-border bg-fd-card p-7 shadow-[var(--mn-shadow-lg)]">
          <div className="mb-3 flex justify-between text-[13px] text-fd-muted-foreground">
            <span>
              <b className="block text-sm text-fd-foreground">Buyer pays</b>
              one transaction
            </span>
            <span>
              <b className="block text-sm text-fd-foreground">Fee</b>protocol
            </span>
            <span>
              <b className="block text-sm text-fd-foreground">Repay vault</b>LP
              advance
            </span>
            <span className="text-right">
              <b className="block text-sm text-fd-foreground">Seller</b>instant
            </span>
          </div>
          <div className="mn-waterfall-track my-4" />
          <div className="flex justify-between text-[13px] text-fd-muted-foreground">
            <span>Settlement Waterfall</span>
            <span
              className="font-semibold text-fd-foreground"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              $24,000.00 USDC
            </span>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <Link
            key={f.title}
            href={f.href}
            className="group rounded-2xl border border-fd-border bg-fd-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--mn-shadow-lg)]"
          >
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ background: 'rgba(200,255,0,0.12)' }}
            >
              <f.icon size={24} style={{ color: 'var(--mn-lime-dark)' }} />
            </div>
            <h3 className="mb-2 text-lg font-bold tracking-[-0.01em]">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-fd-muted-foreground">
              {f.desc}
            </p>
          </Link>
        ))}
      </section>

      {/* Gradient CTA band */}
      <section className="relative mx-auto w-full max-w-5xl px-6 pb-24">
        <div
          className="rounded-[24px] px-6 py-16 text-center"
          style={{ background: 'var(--mn-gradient-primary)' }}
        >
          <h2
            className="mb-3 text-3xl font-bold tracking-[-0.025em] sm:text-4xl"
            style={{ color: 'var(--mn-ink)' }}
          >
            Ready to get started?
          </h2>
          <p
            className="mx-auto mb-8 max-w-md text-base"
            style={{ color: 'rgba(19,23,32,0.75)' }}
          >
            Create your first invoice in under a minute. No credit checks, no
            paperwork.
          </p>
          <a
            href="https://app.monaris.co"
            className="inline-flex h-14 items-center gap-2 rounded-xl px-10 text-lg font-semibold transition-colors"
            style={{
              background: '#ffffff',
              color: 'var(--mn-ink)',
              boxShadow: 'var(--mn-shadow-lg)',
            }}
          >
            Launch App <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
