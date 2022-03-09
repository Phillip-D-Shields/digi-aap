import { useState } from "react";

function Main() {

  return (
    <>
      <header className="text-center py-2">
        <h2 className="text-4xl py-4">
          welcome to your digital allowance access portal
        </h2>
      </header>
      <section className="flex justify-around items-center h-96">
        {/* change this to a component for user or owner depending on address */}
        <div className="text-center text-2xl">
          <h4>some instructions for use</h4>
          <h4>should be different for user and owner</h4>
        </div>
        <div>
          <svg
            className="w-24 h-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Main;
