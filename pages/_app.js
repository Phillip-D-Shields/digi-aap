import "../styles/globals.css";
import Link from "next/link";

function Aap({ Component, pageProps }) {
  return (
    <div>
      <nav className="p-6 text-right bg-emerald-900 text-gray-900">
        <p className="text-3xl md:text-5xl font-bold text-amber-400">Digi-Aap</p>
        <div className="flex flex-col md:flex-row mt-4 justify-end">
          <Link href="/">
            <a className="text-l md:text-xl  text-gray-200 hover:text-gray-400 py-1">
              main
            </a>
          </Link>
          <Link href="/aap">
            <a className="text-l md:text-xl md:ml-6 text-gray-200 hover:text-gray-400 py-1">
              allowance access portal
            </a>
          </Link>
          <Link href="/history">
            <a className="text-l md:text-xl md:ml-6 text-gray-200 hover:text-gray-400 py-1">
              your history
            </a>
          </Link>
        </div>
      </nav>
      <div className="py-6"></div>
      {/* content display */}
      <Component {...pageProps} />
    </div>
  );
}

export default Aap;