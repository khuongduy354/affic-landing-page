import React from "react";

export default function ProblemSection() {
  return (
    <div id="problem" className="bg-gray-900 text-gray-300 antialiased">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Date line, styled like the reference image but with dark theme colors */}
        <div className="max-w-2xl mx-auto text-left mb-12 md:mb-16">
          <p className="text-sm text-gray-400">
            Updated:{" "}
            <span className="bg-blue-600/60 text-white px-2 py-1 rounded-md tracking-wide">
              17th of October, 2025
            </span>
          </p>
          <div className="h-0.5 bg-yellow-400 w-24 mt-2"></div>{" "}
          {/* Highlight line */}
        </div>

        {/* Content starts here */}
        <div className="max-w-2xl mx-auto text-left space-y-8 text-xl md:text-2xl font-medium tracking-tight text-white">
          <p>Hey CEOs, Managers and Entrepreneurs.</p>
          <p>Let’s get real.</p>
          <p>
            Are you tired of using tons of AI tools that look impressive but
            don’t deliver real results?
          </p>

          <div className="pt-4">
            <p className="font-bold text-blue-400">You:</p>
            <div className="space-y-6 text-gray-400 mt-4 pl-4 border-l-2 border-blue-700">
              <p>Waste hours to manage tools that break every week?</p>
              <p>Get stuck on weird errors you can’t even Google?</p>
              <p>Spend lots of money on “automation” that never works?</p>
            </div>
          </div>

          <p>It’s exhausting. It’s expensive. It’s broken.</p>

          <div className="pt-8 space-y-6">
            <p className="font-bold uppercase text-amber-400">
              Here is the truth:
            </p>
            <p>AI and Tools aren't the problem.</p>
            <p className="font-extrabold text-blue-300">
              Disconnected agents are.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              When your agents work alone, they miss context and keep giving
              outputs you have to fix.
            </p>
            <p className="font-semibold text-blue-300">It’s chaos.</p>
          </div>

          <div className="pt-8 space-y-6">
            <p>
              You don’t need more tools - you need a{" "}
              <span className="font-bold text-blue-300">team.</span>
            </p>
            <p>A team that actually works together.</p>
          </div>

          <div className="pt-8 space-y-6">
            <p>
              That’s where <span className="text-amber-400 font-bold">we</span>{" "}
              come in.
            </p>
            <p>
              We don’t sell tools. We deliver{" "}
              <strong className="text-white">Collaborative AI Teams.</strong>
            </p>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>
              Agents that think, talk, and work together through our{" "}
              <strong className="text-white">A2A technology.</strong>
            </p>
            <p>
              They’re pre-trained, fully synced, and ready to perform from day
              one.
            </p>
          </div>

          <div className="pt-12 text-center space-y-4 font-bold tracking-wider">
            <p className="text-blue-300">Plug them in.</p>
            <p className="text-blue-300">Watch them work.</p>
            <p className="text-amber-400">Get results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
