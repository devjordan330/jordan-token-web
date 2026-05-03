import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        console.log("Connected:", accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Head>
        <title>MetaWorld | USDX Token</title>
        <meta name="description" content="The New Standard of Digital Currency" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          METAWORLD
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Ecosystem</a>
          <a href="#" className="hover:text-white transition-colors">Governance</a>
          <a href="#" className="hover:text-white transition-colors">Whitepaper</a>
        </div>
        <button 
          onClick={connectWallet}
          className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95"
        >
          {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
            THE NEW <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">
              STANDARD.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            MetaWorld is building the infrastructure for the future of finance. 
            Secure, scalable, and entirely decentralized.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <button className="px-10 py-4 bg-purple-600 rounded-xl font-bold hover:bg-purple-700 transition-all hover:shadow-[0_0_40px_rgba(147,51,234,0.3)]">
              BUY USDX
            </button>
            <button className="px-10 py-4 border border-gray-800 rounded-xl font-bold hover:bg-gray-900 transition-all">
              View Chart
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 border-y border-gray-900 py-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1B+</div>
            <div className="text-gray-500 uppercase tracking-widest text-xs">Total Supply</div>
          </div>
          <div className="text-center border-x border-gray-900">
            <div className="text-4xl font-bold mb-2">0%</div>
            <div className="text-gray-500 uppercase tracking-widest text-xs">Buy/Sell Tax</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">BEP-20</div>
            <div className="text-gray-500 uppercase tracking-widest text-xs">Network</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-12 text-center italic">Core Foundation</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl mb-4 mx-auto flex items-center justify-center text-3xl font-bold group-hover:rotate-6 transition-transform">
                J
              </div>
              <div className="font-bold text-xl">Jordan</div>
              <div className="text-purple-500 text-sm">Lead Architect</div>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl mb-4 mx-auto flex items-center justify-center text-3xl font-bold group-hover:-rotate-6 transition-transform">
                R
              </div>
              <div className="font-bold text-xl">Raj Purohit</div>
              <div className="text-pink-500 text-sm">Operations</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-8 text-center text-gray-600 text-sm">
        © 2026 MetaWorld Protocol. All rights reserved.
      </footer>
    </div>
  );
}
