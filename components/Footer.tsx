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
    <footer
      className="-mt-4 flex w-full flex-col items-center gap-6 rounded-t-[4rem] bg-[#121212] px-10 pb-4 pt-8 text-white lg:flex-row lg:items-center lg:gap-10 lg:px-60 lg:py-7"
      aria-label="Global">
      <div className="flex lg:w-[inherit]" aria-label="Global">
        <Link href="/" className="relative hidden lg:block">
          <LogoIcon className="h-6 w-6" variant="ghost" />
        </Link>
        <Link href="/" className="relative block lg:hidden">
          <LogoIcon className="h-6 w-6" variant="light" />
        </Link>
      </div>
      <div className="flex w-full justify-around lg:ml-auto lg:w-[inherit] lg:justify-normal lg:gap-6">
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
