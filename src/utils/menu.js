const menu = [
  {
    name: 'Whitepaper',
    link: '/whitepaper.pdf'
  },
  { name: 'GitHub', link: 'https://github.com/AbaxFinance' },
  {
    name: 'Governance',
    sublinks: [
      {
        name: 'ABAX Token ',
        link: 'https://gov.abax.finance/t/abax-the-dao-token-tokenomics/32'
      },
      { name: 'Governance Forum', link: 'https://gov.abax.finance/' }
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Telegram', link: 'https://t.me/abaxprotocol' },
      { name: 'Discord', link: 'https://discord.gg/ECBA5ZYT' },
      { name: 'Twitter', link: 'https://twitter.com/AbaxFinance' },
      { name: 'Reddit', link: 'https://www.reddit.com/r/Abax' }
    ]
  }
]

module.exports = menu
