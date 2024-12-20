import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination() {
  return (
    // Container for the pagination component
    <div className="mt-10 flex items-center justify-center space-x-3">
      {/* Previous button with left arrow icon */}
      <button className="flex items-center rounded-xl border px-4 py-[12px]">
        <FaArrowLeft className="text-gray-700" />
      </button>

      {/* Page number 1 to 5 */}
      <span className="rounded-xl border bg-[#041D5B] px-4 py-2 text-white">
        1
      </span>
      <span className="px-4 py-2 underline">2</span>
      <span className="px-4 py-2 underline">3</span>
      <span className="px-4 py-2 underline">4</span>
      <span className="px-4 py-2 underline">5</span>

      {/* Next button with right arrow icon */}
      <button className="rounded-xl border px-4 py-[12px]">
        <FaArrowRight className="text-gray-700" />
      </button>
    </div>
  );
}
