function Main() {
  return (
    <>
      <header className="text-center">
        <h2 className="text-4xl py-4">
          welcome to your digital allowance access portal
        </h2>
        <h3 className="text-xl text-emerald-600">
          your current wallet address is: 0x000...
        </h3>
        <h3 className="text-xl text-pink-600">
          please connect your metamask wallet
        </h3>
      </header>
      <section className="flex justify-around items-center h-96">
          <div className="text-center text-2xl">
              <h4>current allowance remaining</h4>
              <h4>10 ether</h4>
          </div>
          <div>
          <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
      </section>
    </>
  );
}

export default Main;
