export default function InfoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* ROADMAP */}
      <section id="roadmap" className="max-w-6xl mx-auto mb-24">
        <h1 className="text-5xl font-black mb-10">Roadmap</h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-violet-500/30 rounded-[30px] p-8 bg-[#090909]">
            <h2 className="text-3xl font-black text-violet-400 mb-4">
              Phase 1
            </h2>

            <ul className="space-y-3 text-zinc-300">
              <li>Launch Website</li>
              <li>Token Smart Contract</li>
              <li>Community Setup</li>
              <li>Marketing Start</li>
            </ul>
          </div>

          <div className="border border-violet-500/30 rounded-[30px] p-8 bg-[#090909]">
            <h2 className="text-3xl font-black text-violet-400 mb-4">
              Phase 2
            </h2>

            <ul className="space-y-3 text-zinc-300">
              <li>DEX Listing</li>
              <li>Liquidity Lock</li>
              <li>Influencer Campaign</li>
              <li>Coin Tracking Sites</li>
            </ul>
          </div>

          <div className="border border-violet-500/30 rounded-[30px] p-8 bg-[#090909]">
            <h2 className="text-3xl font-black text-violet-400 mb-4">
              Phase 3
            </h2>

            <ul className="space-y-3 text-zinc-300">
              <li>Exchange Listing</li>
              <li>Staking Launch</li>
              <li>Global Marketing</li>
              <li>Partnerships</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="max-w-6xl mx-auto mb-24">
        <h1 className="text-5xl font-black mb-10">Tokenomics</h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#090909] border border-white/10 rounded-[30px] p-8">
            <h3 className="text-violet-400 text-2xl font-black mb-3">
              Total Supply
            </h3>

            <p className="text-3xl font-black">1B USDX</p>
          </div>

          <div className="bg-[#090909] border border-white/10 rounded-[30px] p-8">
            <h3 className="text-violet-400 text-2xl font-black mb-3">
              Liquidity
            </h3>

            <p className="text-3xl font-black">40%</p>
          </div>

          <div className="bg-[#090909] border border-white/10 rounded-[30px] p-8">
            <h3 className="text-violet-400 text-2xl font-black mb-3">
              Marketing
            </h3>

            <p className="text-3xl font-black">20%</p>
          </div>

          <div className="bg-[#090909] border border-white/10 rounded-[30px] p-8">
            <h3 className="text-violet-400 text-2xl font-black mb-3">
              Staking
            </h3>

            <p className="text-3xl font-black">40%</p>
          </div>

        </div>
      </section>

      {/* GOVERNANCE */}
      <section id="governance" className="max-w-6xl mx-auto mb-24">
        <h1 className="text-5xl font-black mb-10">Governance</h1>

        <div className="bg-[#090909] border border-white/10 rounded-[30px] p-10">
          <p className="text-zinc-300 text-xl leading-9">
            USDX holders can vote on ecosystem upgrades,
            staking rewards, partnerships and future roadmap updates.
          </p>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="max-w-6xl mx-auto mb-24">
        <h1 className="text-5xl font-black mb-10">Community</h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#090909] border border-white/10 rounded-[30px] p-8">
            <h3 className="text-2xl font-black mb-3">Telegram</h3>
            <p className="text-zinc-400">
              Join the USDX trading community.
            </p>
          </div>

          <div className="bg-[#090909] border border-white/10 rounded-[30px] p-8">
            <h3 className="text-2xl font-black mb-3">Twitter</h3>
            <p className="text-zinc-400">
              Latest updates and announcements.
            </p>
          </div>

          <div className="bg-[#090909] border border-white/10 rounded-[30px] p-8">
            <h3 className="text-2xl font-black mb-3">Discord</h3>
            <p className="text-zinc-400">
              Developer and holder discussions.
            </p>
          </div>

        </div>
      </section>

      {/* WHITEPAPER */}
      <section id="whitepaper" className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black mb-10">Whitepaper</h1>

        <div className="bg-[#090909] border border-white/10 rounded-[30px] p-10">
          <p className="text-zinc-300 text-xl leading-9">
            USDX is a decentralized trading ecosystem built for
            fast swaps, staking rewards and long term utility.
          </p>
        </div>
      </section>

    </main>
  )
}
