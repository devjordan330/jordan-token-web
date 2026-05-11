export default function Roadmap() {

  return (

    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-10">

      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center justify-between mb-12">

          <div>

            <h1 className="text-5xl md:text-7xl font-black mb-4">
              Roadmap
            </h1>

            <p className="text-gray-400 text-lg">
              USDX ecosystem expansion strategy.
            </p>

          </div>

          <a
            href="/"
            className="px-6 py-3 rounded-2xl bg-violet-600 font-bold"
          >
            Back Home
          </a>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {[
            [
              'Phase 1',
              [
                'Website Launch',
                'Token Deployment',
                'Community Growth',
                'DEX Listing'
              ]
            ],

            [
              'Phase 2',
              [
                'Staking Platform',
                'Governance System',
                'Liquidity Expansion',
                'Marketing Push'
              ]
            ],

            [
              'Phase 3',
              [
                'Mine & Earn',
                'Mobile App',
                'Bridge Integration',
                'NFT Utilities'
              ]
            ],

            [
              'Phase 4',
              [
                'Global Expansion',
                'CEX Listings',
                'Ecosystem Partnerships',
                'DAO Evolution'
              ]
            ]

          ].map(([phase, items]) => (

            <div
              key={phase}
              className="border border-white/10 rounded-[35px] bg-[#090909] p-8"
            >

              <h2 className="text-3xl font-black mb-8 text-violet-400">
                {phase}
              </h2>

              <div className="space-y-4">

                {items.map((item) => (

                  <div
                    key={item}
                    className="bg-black border border-white/10 rounded-2xl p-4"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}
