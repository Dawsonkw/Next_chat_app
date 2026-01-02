import React from "react";

function NewMessage() {
  return (
    <div>
      <button
        className="w-full bg-purple-500 text-white py-3 rounded-full font-semibold cursor-pointer hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:hover:cursor-not-allowed"
        // DISABLED FOR NOW
        disabled
      >
        + New Message
      </button>
    </div>
  );
}

export default NewMessage;
