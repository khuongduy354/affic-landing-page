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
              <p>Spend hours juggling multiple tools.</p>
              <p>Copy results from one to another just to make things work.</p>
              <p>
                Re-prompt your AI every single time as if you're training a new
                one from scratch.
              </p>
              <p>Watch your "automations" fail the moment one piece breaks.</p>
            </div>
          </div>

          <p>It's frustrating. It's messy. It's not scalable.</p>

          <div className="pt-8 space-y-6">
            <p className="font-bold uppercase text-amber-400">
              Here is the truth:
            </p>
            <p>The real problem is not the tools or AI you're using.</p>
            <p className="font-extrabold text-blue-300">
              It's the disconnection between them.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              Each tools works alone. No context, no shared memory, no
              coordination.
            </p>
            <p>So you keep fixing what they break.</p>
            <p className="font-semibold text-blue-300">
              That's not automation. That’s chaos.
            </p>
          </div>

          <div className="pt-8 space-y-6">
            <p>That is why...</p>
            <p>
              You don’t need more tools - you need a{" "}
              <span className="font-bold text-blue-300">Organization.</span>
            </p>
            <p>
              An organization where your AIs can perform complex tasks and
              communicate effectively with others.
            </p>
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
            {/* <p>
              They’re pre-trained, fully synced, and ready to perform from day
              one.
            </p> */}
            <p>
              So you don't manage tools anymore, you start leading an AI
              Organization that runs itself.
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
