'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';



export default function Home() {
  return (
    <div className="min-h-screen gradient-background flex flex-col items-center justify-center gap-6">
      <h1 className="text-white text-4xl font-black">Find your daily movie</h1>
          <div className="relative">
      <input
        type="text"
        placeholder="Type a genre or movie..."
        className="w-96 p-4 rounded-full bg-[#2e2e2e] text-white placeholder-gray-400 outline-none
          border-[2px] border-transparent
          focus:outline-none focus:border-transparent
          transition-all duration-300
          bg-[#2e2e2e] bg-clip-padding
          relative z-10"
      />
      <div className="absolute inset-0 w-full h-full rounded-full bg-transparent blur-sm opacity-70 bg-gradient-to-r from-purple-600 to-pink-600 pointer-events-none animate-pulse-light" />
    </div>
    </div>
  );
}

