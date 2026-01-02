import React from "react";

function ChatInput() {
  return (
    <div className="p-4 bg-white border-t border-gray-300 flex w-full gap-4">
      <textarea
        className="flex-1 h-12 p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden text-black placeholder-gray-500 text-left"
        placeholder="Type your message here..."
      ></textarea>

      {/* THIS IS GOING TO BE REPLACED WITH A PURE BUTTON COMPONENT */}
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:hover:cursor-not-allowed h-fit self-end">
        Send Message
      </button>
    </div>
  );
}

export default ChatInput;
