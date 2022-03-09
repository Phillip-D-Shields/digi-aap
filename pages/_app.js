import "../styles/globals.css";
import Link from "next/link";
import { useState } from "react";
import { ethers } from "ethers";

function Aap({ Component, pageProps }) {
  async function init() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    console.log(`account: ${signerAddress}`);

    if (signer) {
      setIsConnected(true);
      setAddress(signerAddress);
    }
  }

  init();  

  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState(null);

  let banner;

  

  if (isConnected) {
    banner = (
      <h3 className="py-2 text-2xl bg-emerald-600 text-gray-300 text-center">
        wallet address: {address}
      </h3>
    );
  } else {
    banner = (
      <h3 className="py-2 text-2xl bg-rose-600 text-gray-300 text-center">
        please connect your metamask wallet
      </h3>
    );
  }

  return (
    <div className="bg-gray-400 h-screen">
      {banner}
      <nav className="p-6 text-right bg-emerald-900 text-gray-900">
        <p className="text-3xl md:text-5xl font-bold text-amber-400">
          Digi-Aap
        </p>
        <div className="flex flex-col md:flex-row mt-4 justify-end">
          <Link href="/">
            <a className="text-l md:text-xl  text-gray-200 hover:text-gray-400 p-2">
              main
            </a>
          </Link>
          <Link href="/aap">
            <a className="text-l md:text-xl md:ml-6 text-gray-200 hover:text-gray-400 p-2">
              allowance access portal
            </a>
          </Link>
          <Link href="/history">
            <a className="text-l md:text-xl md:ml-6 text-gray-200 hover:text-gray-400 p-2">
              your history
            </a>
          </Link>
        </div>
      </nav>

      {/* content display */}
      <Component {...pageProps} />
    </div>
  );
}

export default Aap;
