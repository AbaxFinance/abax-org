import Link from 'next/link';
import { LogoIcon } from '@/components/ui/LogoIcon';

type FooterLink = { name: string; link: string };
type FooterLinks = FooterLink[];
const footerLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/AbaxFinance',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/AbaxFinance',
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/WyDrWyr5Fk',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/abaxfinance',
  },
] satisfies FooterLinks;

export default function Footer() {
  return (
    <footer className="-mt-4 flex w-full items-center gap-10 rounded-t-[4rem] bg-[#121212] px-60 py-7 text-white" aria-label="Global">
      <div className="flex" aria-label="Global">
        <Link href="/" className="relative">
          <LogoIcon className="h-6 w-6" variant="ghost" />
        </Link>
      </div>
      <div className="ml-auto flex gap-6">
        {footerLinks.map((l, i) => (
          <>
            <Link target="_blank" rel="noopener noreferrer" href={l.link}>
              {l.name}
            </Link>
            {i !== footerLinks.length - 1 && <div className="text-[#505050]">/</div>}
          </>
        ))}
      </div>
    </footer>
  );
}
