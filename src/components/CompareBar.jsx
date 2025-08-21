// src/components/CompareBar.jsx
import React from "react";

const CompareBar = ({ selected = [], onClear, onOpen, onRemove }) => {
  if (!selected.length) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] md:w-[720px] rounded-2xl bg-white border shadow-xl p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {selected.map((v) => (
            <span key={v._id} className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1 rounded-full">
              {v.name || v.businessName || "Vendor"}
              <button
                onClick={() => onRemove?.(v._id)}
                className="text-xs text-red-600 hover:underline"
              >
                remove
              </button>
            </span>
          ))}
          {selected.length === 1 && (
            <span className="text-xs text-gray-500">Select 1 more vendor…</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={onClear} className="text-sm px-3 py-2 rounded-lg border">
            Clear
          </button>
          <button
            disabled={selected.length !== 2}
            onClick={onOpen}
            className={`text-sm px-4 py-2 rounded-lg ${
              selected.length === 2
                ? "bg-[#CCAB4A] text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Compare (2)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;
