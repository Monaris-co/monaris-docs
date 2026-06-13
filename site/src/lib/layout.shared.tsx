import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/monaris-mark.png"
        alt="Monaris"
        width={26}
        height={26}
        className="h-[26px] w-[26px] rounded-[7px]"
        priority
      />
      <span className="mn-wordmark text-fd-foreground">MONARIS</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      transparentMode: 'top',
    },
    links: [
      {
        type: 'button',
        text: 'Open App',
        url: 'https://stg.monaris.co',
        external: true,
        secondary: true,
      },
    ],
  };
}
