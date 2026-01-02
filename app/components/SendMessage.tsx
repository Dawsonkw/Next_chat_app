import React from "react";
import { SendMessageProps } from "@/lib/types";

function SendMessage({ message, onSend }: SendMessageProps) {
  return (
    <div>
      <button
        onClick={() => onSend(message)}
        disabled={!message.trim()}
        className="bg-purple-500 mb-1 text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:hover:cursor-not-allowed h-fit self-end"
      >
        Send Message
      </button>
    </div>
  );
}

export default SendMessage;
