import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination() {
  return (
    // Container for the pagination component
    <div className="mt-10 flex items-center justify-center space-x-2">
      {/* Previous button with left arrow icon */}
      <button className="flex items-center rounded border px-4 py-2">
        <FaArrowLeft className="" />
      </button>
      {/* Page number 1 to 5*/}
      <span className="rounded border bg-[#041D5B] px-4 py-2 text-white">
        1
      </span>
      <span className="rounded border px-4 py-2">2</span>
      <span className="rounded border px-4 py-2">3</span>
      <span className="rounded border px-4 py-2">4</span>
      <span className="rounded border px-4 py-2">5</span>
      {/* Next button with right arrow icon */}
      <button className="rounded border px-4 py-2">
        <FaArrowRight className="" />
      </button>
    </div>
  );
}
