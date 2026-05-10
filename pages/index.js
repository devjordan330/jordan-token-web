{/* =========================
    DESKTOP
========================= */}

<div className="hidden xl:grid xl:grid-cols-[0.9fr_1.1fr_0.75fr] gap-6 items-start">

  {/* LEFT */}
  <div className="space-y-6">

    {/* HERO */}
    <div className="bg-[#070707] border border-white/10 rounded-[32px] overflow-hidden">

      {/* TOP MENU */}
      <div className="h-[70px] border-b border-white/10 px-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-purple-400 flex items-center justify-center font-black text-lg">
            U
          </div>

          <span className="text-2xl font-black">
            USDX
          </span>

        </div>

        <div className="flex items-center gap-8 text-sm">

          <a href="#swap" className="text-white/80 hover:text-white">
            Trade
          </a>

          <a href="#chart" className="text-white/80 hover:text-white">
            Chart
          </a>

          <a href="#tokenomics" className="text-white/80 hover:text-white">
            Tokenomics
          </a>

          <a href="#roadmap" className="text-white/80 hover:text-white">
            Roadmap
          </a>

          <a href="#community" className="text-white/80 hover:text-white">
            Community
          </a>

        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={openWallet}
            className="h-[44px] px-6 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 font-bold text-sm hover:scale-[1.03] transition-all"
          >
            {wallet
              ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
              : 'Connect Wallet'}
          </button>

          <button className="text-2xl">
            ☰
          </button>

        </div>

      </div>

      {/* MAIN HERO */}
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-6 p-8">

        {/* LEFT HERO */}
        <div className="flex flex-col justify-between">

          <div>

            <h1 className="text-7xl font-black mb-6">
              USDX
            </h1>

            <p className="text-[42px] leading-tight mb-5">
              The Future of
              <br />
              Decentralized Finance
            </p>

            <p className="text-gray-500 text-lg mb-10">
              Built on BNB Smart Chain
            </p>

            <div className="flex gap-4 mb-10">

              <button className="h-[54px] px-8 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 font-bold">
                Buy USDX
              </button>

              <button className="h-[54px] px-8 rounded-xl border border-white/10 bg-white/5">
                Launch dApp
              </button>

            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-3">

            {[
              ['Market Cap', '$1.2M+'],
              ['Holders', '5,432+'],
              ['Liquidity', '$320K+'],
              ['Tax', '12.4%']
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-black/60 border border-white/10 p-4"
              >

                <h3 className="font-black text-lg mb-2">
                  {item[1]}
                </h3>

                <p className="text-[11px] uppercase text-gray-500">
                  {item[0]}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* CHART */}
        <div
          id="chart"
          className="bg-[#0b0b0b] border border-white/10 rounded-[28px] p-5"
        >

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-black">
              USDX / BNB
            </h2>

            <div className="text-green-400 font-black text-2xl">
              +12.45%
            </div>

          </div>

          {/* TIME */}
          <div className="flex gap-3 mb-6">

            {['1m', '5m', '1h', '4h', '1D'].map((t, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-xl text-sm ${
                  t === '1D'
                    ? 'bg-purple-700'
                    : 'bg-white/5'
                }`}
              >
                {t}
              </button>
            ))}

          </div>

          {/* TRADING VIEW */}
          <div className="h-[520px] rounded-[24px] overflow-hidden border border-white/10 bg-black">

            <iframe
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1"
              width="100%"
              height="100%"
              frameBorder="0"
              allowTransparency="true"
              scrolling="no"
              title="chart"
            />

          </div>

        </div>

      </div>

      {/* FEATURE BOXES */}
      <div className="grid grid-cols-5 gap-5 p-8 pt-0">

        {[
          ['Roadmap', 'View our future plans and goals'],
          ['Tokenomics', 'Learn about our token structure'],
          ['Governance', 'Community powered future'],
          ['Community', 'Join our global community'],
          ['Whitepaper', 'Read our official docs']
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#090909] border border-white/10 rounded-[24px] p-6 hover:border-purple-500/40 transition-all"
          >

            <div className="text-4xl mb-5">
              ✦
            </div>

            <h3 className="text-2xl font-black mb-3">
              {item[0]}
            </h3>

            <p className="text-gray-400 leading-7 mb-5">
              {item[1]}
            </p>

            <button className="text-purple-400 font-bold">
              View →
            </button>

          </div>
        ))}

      </div>

      {/* BOTTOM INFO */}
      <div className="px-8 pb-8">

        <div className="max-w-[700px] bg-[#0b0b0b] border border-white/10 rounded-[24px] p-8">

          <div className="space-y-5 text-2xl">

            <div className="flex items-center gap-4">
              <span className="text-green-400">✓</span>
              <span>Modern Exchange Look</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400">✓</span>
              <span>Everything Visible in One Screen</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400">✓</span>
              <span>Less Scrolling, More Action</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400">✓</span>
              <span>Best User Experience</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* RIGHT SWAP */}
  <div
    id="swap"
    className="bg-[#090909] border border-white/10 rounded-[32px] p-6 sticky top-[100px]"
  >

    <div className="flex justify-between items-center mb-8">

      <h2 className="text-4xl font-black">
        Swap
      </h2>

      <button className="text-2xl">
        ⚙
      </button>

    </div>

    {/* FROM */}
    <div className="mb-4">

      <div className="flex justify-between mb-3">

        <p className="text-gray-400">
          From
        </p>

        <p className="text-gray-500 text-sm">
          Balance: {balance}
        </p>

      </div>

      <div className="bg-black border border-white/10 rounded-2xl p-5">

        <div className="flex items-center justify-between gap-4">

          <input
            type="number"
            value={fromAmount}
            onChange={(e) =>
              setFromAmount(e.target.value)
            }
            placeholder="0.0"
            className="bg-transparent outline-none text-4xl font-black w-full"
          />

          <select
            value={fromToken}
            onChange={(e) =>
              setFromToken(e.target.value)
            }
            className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 font-bold"
          >

            <option>BNB</option>
            <option>USDT</option>
            <option>USDC</option>
            <option>USDX</option>

          </select>

        </div>

      </div>

    </div>

    {/* SWITCH */}
    <div className="flex justify-center -my-2 relative z-10">

      <button
        onClick={switchTokens}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-black text-xl border-[5px] border-[#090909]"
      >
        ⇅
      </button>

    </div>

    {/* TO */}
    <div className="mb-6">

      <div className="flex justify-between mb-3">

        <p className="text-gray-400">
          To
        </p>

        <p className="text-gray-500 text-sm">
          Balance: 0
        </p>

      </div>

      <div className="bg-black border border-white/10 rounded-2xl p-5">

        <div className="flex items-center justify-between gap-4">

          <input
            type="number"
            value={toAmount}
            onChange={(e) =>
              setToAmount(e.target.value)
            }
            placeholder="0.0"
            className="bg-transparent outline-none text-4xl font-black w-full"
          />

          <select
            value={toToken}
            onChange={(e) =>
              setToToken(e.target.value)
            }
            className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 font-bold"
          >

            <option>USDX</option>
            <option>BNB</option>
            <option>USDT</option>
            <option>USDC</option>

          </select>

        </div>

      </div>

    </div>

    <div className="flex justify-between items-center mb-8">

      <p className="text-gray-400">
        Slippage Tolerance
      </p>

      <p className="font-black">
        0.5%
      </p>

    </div>

    <button
      onClick={executeSwap}
      className="w-full h-[64px] rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-xl font-black hover:scale-[1.02] transition-all"
    >
      {wallet
        ? `SWAP ${fromToken} → ${toToken}`
        : 'CONNECT WALLET'}
    </button>

  </div>

</div>
