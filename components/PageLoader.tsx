'use client';

import { Heart } from 'lucide-react';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="relative">
        {/* Pulsing hearts animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-ping absolute h-16 w-16">
            <Heart className="w-16 h-16 text-rose-300 fill-rose-300" />
          </div>
        </div>
        
        {/* Main heart */}
        <div className="relative flex items-center justify-center animate-bounce">
          <Heart className="w-16 h-16 text-rose-500 fill-rose-500" />
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-1">
            <span className="text-gray-600 font-medium">Učitavam</span>
            <span className="animate-pulse delay-0">.</span>
            <span className="animate-pulse delay-100">.</span>
            <span className="animate-pulse delay-200">.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
