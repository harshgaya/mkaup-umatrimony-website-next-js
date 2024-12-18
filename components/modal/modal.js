"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ title, children, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      ></div>

      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 md:w-1/3 w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-lg"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </>,
    document.body
  );
}
