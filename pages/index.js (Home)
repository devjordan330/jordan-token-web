// Hero + Features pageimport React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>MetaWorld | The Future of Stablecoins</title>
      </Head>

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800 bg-black sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-tighter text-blue-500">METAWORLD</h1>
        <button 
          onClick={connectWallet}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20"
        >
          {walletAddress ? `${walletAddress.substring(0,6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
          The New Standard.
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Welcome to MetaWorld. We are building a secure, transparent, and high-liquidity ecosystem for the USDX token on BEP20.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform">
            BUY USDX
          </button>
          <button className="border-2 border-blue-500 text-blue-500 px-10 py-4 rounded-xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all">
            WHITEPAPER
          </button>
        </div>
      </main>

      {/* Stats/Tokenomics Preview */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 text-center">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">1 Billion</h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Total Supply</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 text-center">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">0%</h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Transaction Tax</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 text-center">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">BEP-20</h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Network</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 text-center">
        <h3 className="text-4xl font-bold mb-16">Core Leadership</h3>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="group">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-2xl">J</div>
            <p className="text-2xl font-bold">Jordan</p>
            <p className="text-blue-400">CEO & Founder</p>
          </div>
          <div className="group">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-2xl">R</div>
            <p className="text-2xl font-bold">Raj Purohit</p>
            <p className="text-purple-400">CTO</p>
          </div>
        </div>
      </section>

      <footer className="p-12 border-t border-gray-900 text-center">
        <p className="text-gray-600 font-medium">© 2026 MetaWorld Ecosystem. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
