"use client";
import React, { JSX, useState } from "react";
import SendMessage from "./SendMessage";

function ChatInput(): JSX.Element {
  const [message, setMessage] = useState("");

  return (
    <div className="p-4 bg-white border-t border-gray-300 flex w-full gap-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
          }
        }}
        className="flex-1 h-12 p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden text-black placeholder-gray-500 text-left"
        placeholder="Type your message here..."
      ></textarea>
      <SendMessage
        message={message}
        onSend={() => {
          setMessage("");
        }}
      />
    </div>
  );
}

export default ChatInput;