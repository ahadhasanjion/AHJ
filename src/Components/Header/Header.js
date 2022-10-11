import React from "react";

const Header = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a href="/" aria-label="Go Home"title="Logo"className="inline-block mb-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
            Learn faster.
            <br className="hidden md:block" />
            Stay motivated.{" "}
            <span className="inline-block text-deep-purple-accent-400">
              Study smarter.
            </span>
          </h5>
          <p className="mb-6 text-gray-900">
            We see the world partly the way we are and partly the way the world
            is. To see the world the way it is, we need to know ourselves. The
            key to getting the best out of ourselves is to know ourselves better
          </p>
          <hr className="mb-5 border-gray-300" />
        </div>
        <div>
          <iframe
            className="w-full h-full"
            src="https://embed.lottiefiles.com/animation/99118"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Header;
