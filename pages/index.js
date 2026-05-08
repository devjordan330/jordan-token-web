import React from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

const projectId = 'f523ce22bed6a9a2acc600cadd1473c5';

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};

const bsc = {
  chainId: 56,
  name: 'Binance Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: 'https://bsc-dataseed.binance.org'
};

const metadata = {
  name: 'USDExchange | USDX',
  description: 'USDX Digital Asset Ecosystem',
  url: 'https://metaworld-official.vercel.app',
  icons: ['https://metaworld-official.vercel.app/logo.png']
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, bsc],
  projectId,
  enableAnalytics: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div
        className="fixed inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at top, rgba(255,92,0,0.25), transparent 60%)'
        }}
      />

      <nav className="relative z-10 flex justify-between items-center px-6 py-6 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#ff5c00] flex items-center justify-center text-white font-black text-lg shadow-[0_0_30px_rgba(255,92,0,0.5)]">
            USDX
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight uppercase">
              USDExchange
            </h1>

            <p className="text-[#ff5c00] text-xs tracking-[0.4em] uppercase">
              Digital Economy
            </p>
          </div>
        </div>

        <w3m-button />
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <section className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-none mb-8">
            The Future Of
            <br />
            <span className="text-[#ff5c00]">USDX Ecosystem</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            USDExchange is building a powerful decentralized ecosystem focused
            on trading, swapping, digital assets and future Web3 utilities.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase hover:scale-105 transition-all">
              Join Community
            </button>

            <button className="px-10 py-4 border border-white/20 rounded-2xl font-black uppercase hover:border-[#ff5c00] transition-all">
              Explore Ecosystem
            </button>
          </div>
        </section>

        <section className="mb-24">
          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div>
                <p className="text-[#ff5c00] text-xs uppercase tracking-[0.3em] font-black mb-2">
                  Contract Address
                </p>

                <code className="text-sm text-gray-300 break-all">
                  0x0000000000000000000000000000000000000000
                </code>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    '0x0000000000000000000000000000000000000000'
                  );
                  alert('Contract Copied');
                }}
                className="px-8 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase"
              >
                Copy Address
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Total Supply
            </p>

            <h3 className="text-4xl font-black">
              1B <span className="text-[#ff5c00]">USDX</span>
            </h3>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Trading Tax
            </p>

            <h3 className="text-4xl font-black">
              0% <span className="text-[#ff5c00]">Fee</span>
            </h3>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Blockchain
            </p>

            <h3 className="text-4xl font-black">
              BEP20
            </h3>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff5c00]/40"></div>

            <div className="px-8 py-2 border border-[#ff5c00]/30 rounded-full text-[#ff5c00] text-xs uppercase tracking-[0.4em] font-black">
              Roadmap
            </div>

            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff5c00]/40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: 'Phase 1',
                title: 'Launch',
                desc: 'Website and Token Deployment'
              },
              {
                phase: 'Phase 2',
                title: 'Community',
                desc: 'Marketing and Community Growth'
              },
              {
                phase: 'Phase 3',
                title: 'Listing',
                desc: 'CoinMarketCap and CoinGecko'
              },
              {
                phase: 'Phase 4',
                title: 'Expansion',
                desc: 'Swap, DApp and Ecosystem Growth'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[30px] p-6 hover:border-[#ff5c00]/40 transition-all"
              >
                <p className="text-[#ff5c00] text-xs uppercase tracking-widest font-black mb-2">
                  {item.phase}
                </p>

                <h4 className="text-2xl font-black mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full overflow-hidden py-16 border-y border-white/5 relative bg-black/40 mb-20">
          <div className="flex gap-24 items-center animate-pulse">
            {[
              'Binance',
              'Coinbase',
              'Kraken',
              'DEXTools',
              'DexScreener',
              'PancakeSwap',
              'CoinGecko',
              'Web3',
              'USDX'
            ].map((name, i) => (
              <span
                key={i}
                className="text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8">
            <h3 className="text-3xl font-black mb-6">
              Ecosystem Utility
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>• Future USDX Swap Platform</li>
              <li>• Web3 Wallet Integration</li>
              <li>• Trading Ecosystem</li>
              <li>• Community Governance</li>
              <li>• Future DApp Expansion</li>
            </ul>
          </div>

          <div className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[35px] p-8">
            <h3 className="text-3xl font-black mb-6">
              Community Links
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                className="w-full py-4 rounded-2xl bg-black/40 border border-white/10 text-center font-black uppercase hover:bg-[#ff5c00] transition-all"
              >
                Twitter / X
              </a>

              <a
                href="https://t.me"
                target="_blank"
                className="w-full py-4 rounded-2xl bg-black/40 border border-white/10 text-center font-black uppercase hover:bg-[#ff5c00] transition-all"
              >
                Telegram
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="w-full py-4 rounded-2xl bg-black/40 border border-white/10 text-center font-black uppercase hover:bg-[#ff5c00] transition-all"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-16 text-center relative z-10">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-4">
          USDX
        </h1>

        <p className="text-gray-500 uppercase tracking-widest text-xs">
          © 2026 USDExchange. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
