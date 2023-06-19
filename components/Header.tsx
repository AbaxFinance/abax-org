import Link from 'next/link';
import { LogoIcon } from '@/components/ui/LogoIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HamburgerMenuIcon } from '@/components/ui/HamburgerMenuIcon';

type MenuLink = { name: string; link: string };
type MenuLinks = (MenuLink | { name: string; sublinks: MenuLink[] })[];
const menuLinks = [
  {
    name: 'Whitepaper',
    link: 'https://abaxfinance.github.io/abax-org/whitepaper.pdf',
  },
  { name: 'GitHub', link: 'https://github.com/AbaxFinance' },
  {
    name: 'Governance',
    sublinks: [
      {
        name: 'ABAX Token',
        link: 'https://gov.abax.finance/t/abax-the-dao-token-tokenomics/42',
      },
      { name: 'Governance Forum', link: 'https://gov.abax.finance/' },
    ],
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Discord', link: 'https://discord.gg/WyDrWyr5Fk' },
      { name: 'Telegram', link: 'https://t.me/abaxfinance' },
      { name: 'Twitter', link: 'https://twitter.com/AbaxFinance' },
    ],
  },
] satisfies MenuLinks;

export default function Header() {
  return (
    <nav className="flex w-full items-center justify-between gap-12 p-8 text-center" aria-label="Global">
      <div className="flex" aria-label="Global">
        <Link href="/" className="relative -m-1.5 p-5">
          <LogoIcon className="w-30 h-10" variant="light" />
        </Link>
      </div>
      <div className="hidden gap-6 lg:flex">
        {menuLinks.map((l, i) => (
          <>
            {l.sublinks ? (
              <DropdownMenu>
                <DropdownMenuTrigger>{l.name}</DropdownMenuTrigger>
                <DropdownMenuContent>
                  {l.sublinks.map((l, i) => (
                    <DropdownMenuItem key={i}>
                      <Link target="_blank" rel="noopener noreferrer" href={l.link}>
                        {l.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link target="_blank" rel="noopener noreferrer" href={l.link}>
                {l.name}
              </Link>
            )}
            {i !== menuLinks.length - 1 && <div className="text-[#505050]">/</div>}
          </>
        ))}
      </div>
      <button
        disabled
        className="hidden h-14 w-40 items-center justify-center gap-10 rounded-full bg-[#222222] px-6 disabled:cursor-not-allowed lg:flex">
        <div className="relative flex gap-2">
          <div className="whitespace-no-wrap text-white opacity-70">Launch app</div>
          <p className="absolute -right-4 -top-2 text-[8px] text-[#E3C7A4]">SOON</p>
        </div>
      </button>
      <DropdownMenu modal>
        <DropdownMenuTrigger className="lg:hidden">
          <div>
            <HamburgerMenuIcon className="h-10 w-10" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen pb-3">
          {menuLinks.map((l, i) => (
            <>
              {l.sublinks ? (
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="text-base">{l.name}</DropdownMenuLabel>
                  {l.sublinks.map((l, i) => (
                    <DropdownMenuItem className="py-3 text-base" key={i}>
                      <Link target="_blank" rel="noopener noreferrer" href={l.link}>
                        {l.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              ) : (
                <DropdownMenuGroup className="py-3">
                  <DropdownMenuItem className="text-base" key={i}>
                    <Link target="_blank" rel="noopener noreferrer" href={l.link}>
                      {l.name}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              )}
              {i !== menuLinks.length - 1 && <DropdownMenuSeparator className="my-2" />}
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
