'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export default function QuantityControl({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}: QuantityControlProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="w-8 h-8 rounded-lg bg-rose-100 hover:bg-rose-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition"
      >
        <Minus className="w-4 h-4 text-rose-700" />
      </button>
      <span className="w-12 text-center font-semibold text-gray-900">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className="w-8 h-8 rounded-lg bg-rose-100 hover:bg-rose-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition"
      >
        <Plus className="w-4 h-4 text-rose-700" />
      </button>
    </div>
  );
}
