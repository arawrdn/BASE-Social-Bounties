import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { base, baseSepolia } from '@reown/appkit/networks'

export const projectId = '180a7164cfa9e5388daf1160841f65a0'

export const metadata = {
  name: 'Base Social Bounties',
  description: 'Earn ETH for social tasks on Base',
  url: 'https://bounty.base.org',
  icons: ['https://avatars.githubusercontent.com/u/108554348']
}

export const appKit = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [base, baseSepolia],
  metadata,
  projectId,
  features: {
    analytics: true,
    email: true,
    socials: ['x', 'google', 'discord'],
    onramp: true
  }
})
