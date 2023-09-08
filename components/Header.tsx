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
import { Fragment } from 'react';

type MenuLink = { name: string; link: string };
type MenuLinks = (MenuLink | { name: string; sublinks: MenuLink[] })[];
const menuLinks = [
  {
    name: 'Techpaper',
    link: 'https://abaxfinance.github.io/abax-org/techpaper.pdf',
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
    <nav className="flex w-full items-center justify-between gap-12 p-4 text-center lg:p-8 lg:px-16 lg:py-8" aria-label="Global">
      <div className="flex" aria-label="Global">
        <Link href="/" className="relative -m-1.5 p-2 lg:p-5">
          <LogoIcon className="w-30 h-10" variant="light" />
        </Link>
      </div>
      <div className="hidden gap-6 lg:flex">
        {menuLinks.map((l, i) => (
          <Fragment key={i}>
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
              <Link key={i} target="_blank" rel="noopener noreferrer" href={l.link}>
                {l.name}
              </Link>
            )}
            {i !== menuLinks.length - 1 && (
              <div key={`divider_${i}`} className="text-[#505050]">
                /
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={'https://app.abax.finance'}
        className="hidden h-14 w-44 items-center justify-center gap-10 rounded-full bg-[#222222] px-6 disabled:cursor-not-allowed lg:flex">
        <div className="relative flex gap-2">
          <div className="whitespace-no-wrap text-white">Launch app</div>
          <p className="absolute -right-5 -top-3 text-xs text-[#E3C7A4]">TESTNET</p>
        </div>
      </Link>
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
                <DropdownMenuGroup key={i}>
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
                <DropdownMenuGroup key={i} className="py-3">
                  <DropdownMenuItem className="text-base" key={i}>
                    <Link target="_blank" rel="noopener noreferrer" href={l.link}>
                      {l.name}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              )}
              {i !== menuLinks.length - 1 && <DropdownMenuSeparator key={`divider_${i}`} className="my-2" />}
            </>
          ))}
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={'https://app.abax.finance'}
                className="h-14 w-full items-center justify-center gap-10 rounded-full bg-[#222222] px-6 disabled:cursor-not-allowed">
                <div className="relative flex h-full items-center justify-center gap-2">
                  <div className="whitespace-no-wrap text-white">Launch app</div>
                  <p className="absolute right-16 top-2 text-xs text-[#E3C7A4]">TESTNET</p>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
