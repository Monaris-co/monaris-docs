import { Fragment, type ReactNode } from 'react';
import {
  ArrowRight,
  FileText,
  Shield,
  Award,
  Banknote,
  Bot,
  RotateCw,
  type LucideIcon,
} from 'lucide-react';

type ConnectStep = {
  icon: LucideIcon;
  name: string;
  desc: ReactNode;
  highlight?: boolean;
};

const CONNECT_STEPS: ConnectStep[] = [
  {
    icon: FileText,
    name: 'AR/AP',
    desc: 'Every cleared invoice builds your Score.',
  },
  {
    icon: Shield,
    name: 'Private',
    desc: 'Every payment routes privately by default.',
  },
  {
    icon: Award,
    name: 'Score',
    desc: 'Your cashflow history, turned into financial identity.',
    highlight: true,
  },
  {
    icon: Banknote,
    name: 'Credit',
    desc: 'Unlocked by your Score, repaid from future invoices.',
  },
  {
    icon: Bot,
    name: 'Mona',
    desc: 'The intelligence layer across all of it.',
  },
];

/** Vertical "spine" showing how every product feeds the Score. */
export function ConnectMap() {
  return (
    <div className="not-prose my-6 rounded-2xl border border-fd-border bg-fd-card p-3 sm:p-4">
      <ol className="m-0 list-none p-0">
        {CONNECT_STEPS.map((s, i) => {
          const last = i === CONNECT_STEPS.length - 1;
          return (
            <li key={s.name} className="flex gap-4">
              <div className="flex flex-col items-center self-stretch">
                <div
                  className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-fd-primary"
                  style={{ background: 'rgba(200,255,0,0.12)' }}
                >
                  <s.icon size={20} strokeWidth={2} />
                </div>
                {!last && (
                  <div className="my-1 w-px flex-1 bg-fd-primary/30" />
                )}
              </div>
              <div
                className={`mb-2 flex-1 rounded-xl px-3 py-2.5 ${
                  s.highlight
                    ? 'bg-fd-primary/5 ring-1 ring-fd-primary/30'
                    : ''
                }`}
              >
                <div className="text-[15px] font-bold tracking-[-0.01em]">
                  {s.name}
                </div>
                <div className="text-sm text-fd-muted-foreground">
                  {s.desc}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Horizontal chip flow with lime arrows; wraps on small screens. */
export function FlowSteps({
  steps,
  loop = false,
}: {
  steps: string[];
  loop?: boolean;
}) {
  return (
    <div className="not-prose my-6 flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <Fragment key={step}>
          <span className="rounded-lg border border-fd-border bg-fd-card px-3 py-2 text-sm font-medium shadow-[var(--mn-shadow-sm,0_1px_2px_rgba(19,23,32,0.04))]">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight
              size={16}
              className="shrink-0 text-fd-primary"
              strokeWidth={2.5}
            />
          )}
        </Fragment>
      ))}
      {loop && (
        <span className="ml-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-fd-primary">
          <RotateCw size={15} strokeWidth={2.5} /> repeat
        </span>
      )}
    </div>
  );
}
